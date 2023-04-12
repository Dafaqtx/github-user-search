import { FC } from "react";
import { UserStat, UserTitle } from "components";
import { LocalGithubUser } from "types";

import styles from "./UserCard.module.scss";
import { UserInfo } from "components/UserInfo";

interface UserCardProps extends LocalGithubUser {}

export const UserCard: FC<UserCardProps> = (props) => {
  const {
    created,
    login,
    name,
    repos,
    followers,
    following,
    bio,
    avatar,
    blog,
    company,
    location,
    twitter,
  } = props;

  const bioClasses = `${styles.Bio}${bio ? "" : ` ${styles.Empty}`}`;

  return (
    <div className={styles.UserCard} data-testid="UserCard">
      <img className={styles.Avatar} src={avatar} alt={login} />
      <UserTitle created={created} login={login} name={name} />
      <p className={bioClasses}>{bio || "This profile has`t bio"}</p>
      <UserStat repos={repos} followers={followers} following={following} />
      <UserInfo
        blog={blog}
        company={company}
        location={location}
        twitter={twitter}
      />
    </div>
  );
};
