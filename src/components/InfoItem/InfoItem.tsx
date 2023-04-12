import { FC } from "react";

import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem: FC<InfoItemProps> = ({ icon, text, isLink = false }) => {
  const currentText = text || "Not available";
  const currentHref =
    text && text.startsWith("http") ? text : `https://${text}`;

  const className = `${styles.InfoItem}${text ? "" : ` ${styles.Empty}`}`;

  return (
    <div className={className} data-testid="InfoItem">
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className={styles.Link}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
