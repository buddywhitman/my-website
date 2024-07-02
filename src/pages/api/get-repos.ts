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
        contributionTypes: COMMIT
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
  const resp = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${GITHUB_TOKEN}`,
    },
  });
  const js: QueryData = (await resp.json()).data.viewer;
  if (resp.status === 200) {
    js.repositories.nodes = js.repositories.nodes.filter(
      (repo) =>
        !ExceptionRules.includes(repo.nameWithOwner.toLowerCase()) &&
        repo.isFork === false
    );
    res.status(200).send({ status: true, data: js });
  } else {
    res.status(200).send({ status: false, data: null });
  }
};
