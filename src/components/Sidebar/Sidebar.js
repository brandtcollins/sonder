import React from "react";
import SidebarLink from "./SidebarLink/SidebarLink";
import Avatar from "../Avatar/Avatar";
import Categories from './Categories/Categories';
import { Row, Col } from 'react-bootstrap';
import styles from './Sidebar.module.css';


const Sidebar = (props) => {

    return (
        <Col xs={2} className={styles.sidebar}>
            <Avatar />
            <Row className={styles.row}>
                <p>NOTES</p>
                    <ul>
                        <SidebarLink icon="fa-file-alt" name="View All"/>
                        <SidebarLink icon="fa-trash" name="Deleted"/>
                    </ul>
            </Row>
            <Row className={styles.row}>
                <Categories changeCategory={props.changeCategory} />
            </Row>
            <Row className={styles.row}>
                <p>SIGN UP</p>
                <p>LOGIN</p> 
            </Row>
        </Col>
    );
}

export default Sidebar;