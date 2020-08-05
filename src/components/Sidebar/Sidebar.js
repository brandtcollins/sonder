import React from "react";
import './Sidebar.css';
import SidebarLink from "./SidebarLink/SidebarLink";
import Avatar from "../Avatar/Avatar";
import Categories from './Categories/Categories';
import { Row, Col } from 'react-bootstrap'

const Sidebar = () => {

    return (
        <Col xs={2} className="sidebar">
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
        </Col>
    );
}

export default Sidebar;