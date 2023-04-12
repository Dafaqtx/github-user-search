import { FC } from "react";

import { InfoItem, InfoItemProps } from "components/InfoItem";
import { LocalGithubUser } from "types";

import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";

import styles from "./UserInfo.module.scss";

interface UserInfoProps
  extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo: FC<UserInfoProps> = ({
  blog,
  company,
  location,
  twitter,
}) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.UserInfo} data-testid="UserInfo">
      {items.map((item, i) => (
        <InfoItem key={i} {...item} />
      ))}
    </div>
  );
};
