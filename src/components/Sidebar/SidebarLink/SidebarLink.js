import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconFinder from "../../../utils/iconFinder/iconFinder";

const SidebarLink = (props) => {
  return (
    <li onClick={props.click}>
      <FontAwesomeIcon icon={iconFinder(props.category)} />
      <a href="/#" name={props.name}>
        {props.name}
      </a>{" "}
      {props.count ? <span>{props.count}</span> : null}
    </li>
  );
};

export default SidebarLink;
