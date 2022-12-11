import React from "react";
import { FaStaylinked } from "react-icons/fa";
import styles from "./Screen.module.scss";

type Props = {
  children?: React.ReactNode;
};

const Screeen = ({ children }: Props) => {
  return (
    <div className={styles.screenFar}>
      <div className={styles.screenMid}>
        <div className={styles.screenNear}>
          <div className={styles.scanline}></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Screeen;
