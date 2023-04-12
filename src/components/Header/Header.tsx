import { ThemeSwitcher } from "components";

import styles from "./Header.module.scss";

export const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <div className={styles.Logo}>devfinder</div>
    <ThemeSwitcher />
  </div>
);
