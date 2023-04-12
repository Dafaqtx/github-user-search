import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

import { ReactComponent as MoonIcon } from "assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "assets/icon-sun.svg";

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  const handleClick = () => setDark((prev) => !prev);

  return (
    <button
      type="button"
      className={styles.ThemeSwitcher}
      data-testid="ThemeSwitcher"
      onClick={handleClick}
    >
      <span>{themeText}</span>
      <ThemeIcon className={styles.Icon} />
    </button>
  );
};
