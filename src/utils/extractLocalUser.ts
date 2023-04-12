import { LocalGithubUser, GithubUser } from "types";

export const extractLocalUser = ({
  login,
  avatar_url,
  name,
  company,
  blog,
  location,
  bio,
  twitter_username,
  public_repos,
  followers,
  following,
  created_at,
}: GithubUser): LocalGithubUser => ({
  login,
  avatar: avatar_url,
  name,
  company,
  blog,
  location,
  bio,
  twitter: twitter_username,
  repos: public_repos,
  followers,
  following,
  created: created_at,
});
