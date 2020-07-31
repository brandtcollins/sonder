import React from "react";
import { Typography  } from '@material-ui/core';

const SidebarLink = (props) => {
    return (
        <li><Typography><i className={`fas ${props.icon}`}></i><a href="/#">{props.name}</a></Typography></li>
    );
}

export default SidebarLink;