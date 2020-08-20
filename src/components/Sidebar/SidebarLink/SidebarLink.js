import React from "react";

const SidebarLink = (props) => {
    return (
        <li onClick={props.click}><i className={`fas ${props.icon}`}></i><a href="/#" name={props.name} >{props.name}</a></li>
    );
}

export default SidebarLink;