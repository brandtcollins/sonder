import React from "react";

const SidebarLink = (props) => {
    return (
        <li><i className={`fas ${props.icon}`}></i><a href="/#">{props.name}</a></li>
    );
}

export default SidebarLink;