import { FC } from "react";
import { LocalGithubUser } from "types";
import styles from "./UserTitle.module.scss";

interface UserTitleProps
  extends Pick<LocalGithubUser, "name" | "login" | "created"> {}

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitle: FC<UserTitleProps> = ({ name, login, created }) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.UserTitle} data-testid="UserTitle">
      <h2>{name}</h2>
      <h3>@{login.toLowerCase()}</h3>
      <span>Joined {joinedDate}</span>
    </div>
  );
};
