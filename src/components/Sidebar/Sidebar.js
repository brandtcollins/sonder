import React from "react";
import './Sidebar.css';
import SidebarLink from "./SidebarLink/SidebarLink";
import Avatar from "../Avatar/Avatar";
import Categories from './Categories/Categories';
import { Row } from 'react-bootstrap'

function Sidebar(){
    return (
        <div className="sidebar">
            <Avatar />
            <Row>
                <p>NOTES</p>
                    <ul>
                        <SidebarLink icon="fa-file-alt" name="View All"/>
                        <SidebarLink icon="fa-trash" name="Deleted"/>
                    </ul>
            </Row>
            <Row>
                <Categories />
            </Row>
            <Row>
                <p>SIGN UP</p>
                <p>REGISTER</p> 
            </Row>
        </div>
    );
}

export default Sidebar;