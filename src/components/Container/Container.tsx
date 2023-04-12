import { FC } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.Container} data-testid="Container">
    {children}
  </div>
);
