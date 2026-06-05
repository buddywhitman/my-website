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
    return res.status(200).send({ status: false, message: "Missing GITHUB_PA token" });
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
    
    if (result.errors) {
       console.error(result.errors);
       return res.status(200).send({ status: false, data: null });
    }

    const js = result.data.viewer;

    // Filter OWNER repositories
    js.repositories.nodes = js.repositories.nodes.filter(
      (repo: any) =>
        !ExceptionRules.includes(repo.nameWithOwner.toLowerCase()) &&
        repo.isFork === false
    );

    // Merge OWNER and CONTRIBUTED_TO nodes for a unified "Projects & Activity" view if needed
    // But for now, we just return the enhanced data
    res.status(200).send({ status: true, data: js });
  } catch (error) {
    console.error(error);
    res.status(200).send({ status: false, data: null });
  }
};
