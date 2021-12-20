import type { NextApiRequest, NextApiResponse } from "next";

import { QueryData } from "../../types/typed_data";

const GITHUB_TOKEN = process.env.GITHUB_PA;
const ExceptionRules = [
  "daggy1234/dagpi",
  "daggy1234/dagpi-auth",
  "daggy1234/dagpi-data",
  "daggy1234/dagpi-central",
  "daggy1234/dagpi-dashboard",
  "daggy1234/dagbot",
  "daggy1234/dagpaste",
  "daggy1234/polaroid",
  "daggy1234/image-uploader",
  "daggy1234/r.daggy",
  "daggy1234/udymts",
  "daggy1234/ewaste-app",
  "daggy1234/daggy1234",
  "daggy1234/f1bot",
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
