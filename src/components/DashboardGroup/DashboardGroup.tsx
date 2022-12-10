import React from "react";
import styles from "./DashboardGroup.module.scss";
import cx from "classnames";

type Props = {
  children?: React.ReactNode;
};

const DashboardGroup = ({ children }: Props) => {
  return <div className={cx(styles.dashboardGroup)}>{children}</div>;
};

export default DashboardGroup;
