import type { NextApiRequest, NextApiResponse } from "next";
import { QueryData } from "../../types/typed_data";

const GITHUB_TOKEN = process.env.GITHUB_PA;

const ExceptionRules = [
  "buddywhitman/my-website",
  "buddywhitman/isa-achievements",
  "buddywhitman/crud-app-frontend",
  "buddywhitman/crud-app-backend",
  "buddywhitman/buddywhitman",
  "buddywhitman/grocery-ecommerce",
  "buddywhitman/schedul.io",
  "buddywhitman/flatcalc",
  "buddywhitman/cryptonite-tp",
  "buddywhitman/electronica",
  "buddywhitman/resume-cv",
  "buddywhitman/VaxBot",
  "buddywhitman/buddywhitman.github.io",
  "buddywhitman/soil.io",
];

const query = `
  query {
    viewer {
      login
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        totalRepositoryContributions
      }
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC },
        ownerAffiliations: OWNER
      ) {
        nodes {
          nameWithOwner
          description
          createdAt
          stargazerCount
          url
          isFork
          isPrivate
          primaryLanguage {
            color
            name
          }
          licenseInfo {
            nickname
            name
            url
          }
        }
      }
      repositoriesContributedTo(
        contributionTypes: [COMMIT, PULL_REQUEST, ISSUE, REPOSITORY]
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          description
          createdAt
          nameWithOwner
          url
          forkCount
          primaryLanguage {
            color
            name
          }
          stargazerCount
          isPrivate
          licenseInfo {
            nickname
            url
            name
          }
        }
      }
    }
  }
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!GITHUB_TOKEN) {
    console.warn("Missing GITHUB_PA token, falling back to public REST API");
    return fallbackRestApi(res);
  }

  try {
    const resp = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
    });

    const result = await resp.json();
    
    if (result.errors || result.message) {
       console.warn("GraphQL errors or message, falling back to REST API", result.errors || result.message);
       return fallbackRestApi(res);
    }

    const js = result.data?.viewer;
    if (!js) {
       return fallbackRestApi(res);
    }

    // Filter OWNER repositories
    if (js.repositories && js.repositories.nodes) {
      js.repositories.nodes = js.repositories.nodes.filter(
        (repo: any) =>
          repo && repo.nameWithOwner &&
          !ExceptionRules.includes(repo.nameWithOwner.toLowerCase()) &&
          repo.isFork === false
      );
    }

    res.status(200).send({ status: true, data: js });
  } catch (error) {
    console.error("Fetch failed", error);
    return fallbackRestApi(res);
  }
};

async function fallbackRestApi(res: NextApiResponse) {
  try {
    const resp = await fetch("https://api.github.com/users/buddywhitman/repos?sort=updated&per_page=20");
    const repos = await resp.json();

    if (!Array.isArray(repos)) {
      return res.status(200).send({ status: false, data: null });
    }

    const formattedNodes = repos.filter((r: any) => !r.fork && r.full_name && !ExceptionRules.includes(r.full_name.toLowerCase())).map((r: any) => ({
      id: r.id || Math.random().toString(),
      nameWithOwner: r.full_name,
      description: r.description || "",
      createdAt: r.created_at,
      stargazerCount: r.stargazers_count || 0,
      url: r.html_url,
      isFork: r.fork,
      isPrivate: r.private,
      primaryLanguage: r.language ? { name: r.language, color: "#0ea5e9" } : null,
      licenseInfo: r.license ? { name: r.license.name, nickname: r.license.spdx_id, url: r.license.url } : null,
    }));

    const mockData = {
      repositories: { nodes: formattedNodes },
      repositoriesContributedTo: { nodes: formattedNodes },
      contributionsCollection: {
        contributionCalendar: { totalContributions: 0 },
        totalCommitContributions: 0,
        totalPullRequestContributions: 0,
      }
    };

    return res.status(200).send({ status: true, data: mockData });
  } catch (err) {
    return res.status(200).send({ status: false, data: null });
  }
}
