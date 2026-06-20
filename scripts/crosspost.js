/* eslint-disable */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { chromium } = require('playwright');

// Helper to log with timestamps
function log(message, level = 'INFO') {
  console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
}

async function run() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    log('No files specified to cross-post.', 'WARNING');
    return;
  }

  log(`Starting cross-posting process for ${files.length} file(s)...`);

  for (const filePath of files) {
    if (!fs.existsSync(filePath)) {
      log(`File does not exist: ${filePath}`, 'ERROR');
      continue;
    }

    log(`Processing file: ${filePath}`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const title = data.title;
    const description = data.description || '';
    const tags = data.tags || [];
    const slug = path.basename(filePath, path.extname(filePath));
    const postUrl = `https://buddywhitman.vercel.app/blog/${slug}`;

    if (!title) {
      log(`No title found in frontmatter of ${filePath}. Skipping.`, 'ERROR');
      continue;
    }

    log(`Parsed post: "${title}"`);

    // 1. Cross-post to Medium
    if (process.env.MEDIUM_TOKEN) {
      try {
        await postToMedium(title, content, tags, postUrl);
      } catch (err) {
        log(`Medium posting failed: ${err.message}`, 'ERROR');
      }
    } else {
      log('MEDIUM_TOKEN environment variable not set. Skipping Medium.', 'WARNING');
    }

    // 2. Cross-post to Substack
    if (process.env.SUBSTACK_COOKIES && process.env.SUBSTACK_SUBDOMAIN) {
      try {
        await postToSubstack(title, description, content);
      } catch (err) {
        log(`Substack posting failed: ${err.message}`, 'ERROR');
      }
    } else {
      log('SUBSTACK_COOKIES or SUBSTACK_SUBDOMAIN not set. Skipping Substack.', 'WARNING');
    }

    // 3. Post to Hacker News
    if (process.env.HN_USERNAME && process.env.HN_PASSWORD) {
      try {
        await postToHackerNews(title, postUrl);
      } catch (err) {
        log(`Hacker News posting failed: ${err.message}`, 'ERROR');
      }
    } else {
      log('HN_USERNAME or HN_PASSWORD not set. Skipping Hacker News.', 'WARNING');
    }

    // 4. Create GitHub Gist
    if (process.env.GIST_TOKEN) {
      try {
        await postToGist(title, description, content, slug);
      } catch (err) {
        log(`GitHub Gist creation failed: ${err.message}`, 'ERROR');
      }
    } else {
      log('GIST_TOKEN environment variable not set. Skipping GitHub Gist.', 'WARNING');
    }
  }
}

async function postToMedium(title, content, tags, canonicalUrl) {
  log('Starting Medium cross-posting...');

  // Get User ID
  const meRes = await fetch('https://api.medium.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${process.env.MEDIUM_TOKEN}`,
      'Accept': 'application/json'
    }
  });

  if (!meRes.ok) {
    throw new Error(`Failed to fetch Medium profile: Status ${meRes.status}`);
  }

  const meData = await meRes.json();
  const userId = meData.data.id;
  log(`Fetched Medium user ID: ${userId}`);

  // Create post as draft
  const postRes = await fetch(`https://api.medium.com/v1/users/${userId}/posts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MEDIUM_TOKEN}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title,
      contentFormat: 'markdown',
      content: `# ${title}\n\n${content}\n\n*Originally published at [buddywhitman.vercel.app](${canonicalUrl}).*`,
      tags,
      canonicalUrl,
      publishStatus: 'draft' // Submits as draft so you can review before publishing
    })
  });

  if (!postRes.ok) {
    const errText = await postRes.text();
    throw new Error(`Failed to create Medium draft: Status ${postRes.status} - ${errText}`);
  }

  const postData = await postRes.json();
  log(`Medium draft created successfully! URL: ${postData.data.url}`);
}

async function postToSubstack(title, description, content) {
  log('Starting Substack cross-posting via Playwright...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  try {
    const cookies = JSON.parse(process.env.SUBSTACK_COOKIES);
    await context.addCookies(cookies);
    log('Substack session cookies injected.');
  } catch (err) {
    throw new Error(`Failed to parse SUBSTACK_COOKIES: ${err.message}`);
  }

  const page = await context.newPage();
  const subdomain = process.env.SUBSTACK_SUBDOMAIN;
  
  log(`Navigating to Substack editor on subdomain: ${subdomain}`);
  await page.goto(`https://${subdomain}.substack.com/publish/post`);

  // Allow editor page to load
  await page.waitForTimeout(5000);

  // Take a screenshot for debugging if anything goes wrong
  const pageTitle = await page.title();
  log(`Current page title: "${pageTitle}"`);

  // Find the title element. Substack usually has an input or contenteditable for Title.
  // We look for common editor selectors or placeholders.
  let titleFilled = false;
  const titleSelectors = [
    'textarea.post-title', 
    'input[placeholder="Title"]', 
    'input[placeholder="Post title"]', 
    '.post-editor-title',
    'h1[contenteditable="true"]'
  ];

  for (const selector of titleSelectors) {
    try {
      if (await page.locator(selector).count() > 0) {
        await page.fill(selector, title);
        log(`Filled title using selector: ${selector}`);
        titleFilled = true;
        break;
      }
    } catch (e) {
      // Continue trying other selectors
    }
  }

  if (!titleFilled) {
    // Fallback: click and type
    log('Title selector not matched. Attempting fallback click and type on editor header...', 'WARNING');
    await page.click('body');
    await page.keyboard.press('Tab');
    await page.keyboard.type(title);
  }

  // Find the subtitle/description element
  let descFilled = false;
  const descSelectors = [
    'textarea.post-subtitle',
    'input[placeholder="Subtitle"]',
    'input[placeholder="Post subtitle"]',
    '.post-editor-subtitle'
  ];

  for (const selector of descSelectors) {
    try {
      if (await page.locator(selector).count() > 0) {
        await page.fill(selector, description);
        log(`Filled subtitle using selector: ${selector}`);
        descFilled = true;
        break;
      }
    } catch (e) {
      // Continue trying other selectors
    }
  }

  // Find the editor body (ProseMirror is used by Substack)
  const bodySelector = '.ProseMirror';
  if (await page.locator(bodySelector).count() > 0) {
    await page.focus(bodySelector);
    // Insert content as text. Note: Substack rich editor accepts text.
    // If you paste HTML into ProseMirror, it styles it. We can copy-paste content or write text.
    await page.keyboard.insertText(content);
    log('Filled editor body successfully.');
  } else {
    throw new Error('Could not find Substack editor body selector (.ProseMirror).');
  }

  // Auto-save handles draft creation. We wait a few seconds for auto-save to complete.
  await page.waitForTimeout(5000);
  log('Draft successfully created/saved on Substack.');

  await browser.close();
}

async function postToHackerNews(title, url) {
  log('Starting Hacker News submission via Playwright...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  log('Navigating to Hacker News login...');
  await page.goto('https://news.ycombinator.com/login');
  
  await page.fill('input[name="acct"]', process.env.HN_USERNAME);
  await page.fill('input[name="pw"]', process.env.HN_PASSWORD);
  await page.click('input[value="login"]');

  // Verify login success by checking for logout link or user profile
  await page.waitForTimeout(2000);
  const bodyText = await page.innerText('body');
  if (bodyText.includes('Login failed') || !bodyText.includes('logout')) {
    throw new Error('Hacker News login failed. Please verify credentials.');
  }
  log('Hacker News logged in successfully.');

  log('Navigating to Hacker News submission page...');
  await page.goto('https://news.ycombinator.com/submit');
  
  await page.fill('input[name="title"]', title);
  await page.fill('input[name="url"]', url);
  await page.click('input[value="submit"]');

  await page.waitForTimeout(3000);
  const currentUrl = page.url();
  log(`Hacker News submission completed. Redirected URL: ${currentUrl}`);

  await browser.close();
}

async function postToGist(title, description, content, slug) {
  log('Starting GitHub Gist creation...');

  const fileName = `${slug}.md`;
  const body = {
    description: description || `Blog post: ${title}`,
    public: true,
    files: {
      [fileName]: {
        content: `# ${title}\n\n${content}`
      }
    }
  };

  const response = await fetch('https://api.github.com/gists', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GIST_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      'User-Agent': 'Node.js-Fetch'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Failed to create GitHub Gist: Status ${response.status} - ${errText}`);
  }

  const gistData = await response.json();
  log(`GitHub Gist created successfully! URL: ${gistData.html_url}`);
}

run().catch((err) => {
  log(`Fatal execution error: ${err.message}`, 'ERROR');
  process.exit(1);
});
