export interface QueryData {
  repositories: {
    nodes: RespositoryData[];
  };
  repositoriesContributedTo: {
    nodes: RespositoryData[];
  };
}

export interface RespositoryData {
  nameWithOwner: string;
  description: string;
  createdAt: string;
  stargazerCount: number;
  url: string;
  isPrivate: boolean;
  isFork: boolean;
  primaryLanguage: {
    color: string;
    name: string;
  };
  licenseInfo: {
    nickname?: string;
    name: string;
    url: string;
  };
}
