import { FC } from "react";
import { LocalGithubUser } from "types";

import styles from "./UserStat.module.scss";

export interface UserStatProps
  extends Pick<LocalGithubUser, "repos" | "followers" | "following"> {}

export const UserStat: FC<UserStatProps> = ({
  repos,
  followers,
  following,
}) => (
  <div className={styles.UserStat} data-testid="UserStat">
    <div className={styles.Info}>
      <div className={styles.InfoTitle}>Repos</div>
      <div className={styles.InfoNumber}>{repos}</div>
    </div>
    <div className={styles.Info}>
      <div className={styles.InfoTitle}>Followers</div>
      <div className={styles.InfoNumber}>{followers}</div>
    </div>
    <div className={styles.Info}>
      <div className={styles.InfoTitle}>Following</div>
      <div className={styles.InfoNumber}>{following}</div>
    </div>
  </div>
);
