import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconFinder from "../../../utils/iconFinder/iconFinder";

const SidebarLink = (props) => {
  const { click, category, name, count } = props;
  return (
    <li onClick={click} name={name}>
      <FontAwesomeIcon icon={iconFinder(category)} />
      <a href="/#">{name}</a>
      {count && <span>{count}</span>}
    </li>
  );
};

export default SidebarLink;
