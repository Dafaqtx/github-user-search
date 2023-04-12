import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button className={styles.Button} onClick={onClick} data-testid="Button">
    {children}
  </button>
);
