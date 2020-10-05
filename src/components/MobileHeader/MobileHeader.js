import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./MobileHeader.module.scss";

const MobileHeader = () => {
  return (
    <div className={styles.mobileHeader}>
      <div className={styles.avatar}>
        <Avatar />
      </div>
      <button>
        <FontAwesomeIcon icon="bars" />
      </button>
    </div>
  );
};

export default MobileHeader;
