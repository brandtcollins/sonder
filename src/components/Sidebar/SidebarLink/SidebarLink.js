import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconFinder from "../../../utils/iconFinder/iconFinder";
import styles from "../Sidebar.module.css";

const SidebarLink = (props) => {
  const { click, category, name, count, active } = props;
  return (
    <li onClick={click} name={name} className={active ? styles.active : null}>
      <FontAwesomeIcon icon={iconFinder(category)} />
      <a href="/#">{name}</a>
      {count && <span>{count}</span>}
    </li>
  );
};

export default SidebarLink;
