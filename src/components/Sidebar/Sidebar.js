import React from "react";
import SidebarLink from "./SidebarLink/SidebarLink";
import Avatar from "../Avatar/Avatar";
import Categories from "./Categories/Categories";
import { Row, Col } from "react-bootstrap";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const { notes, setCategory } = props;

  const handleClick = (event) => {
    setCategory(event.target.name);
  };

  return (
    <Col xs={2} className={styles.sidebar}>
      <Avatar />
      <Row className={styles.row}>
        <p>NOTES</p>
        <ul>
          <SidebarLink click={handleClick} icon="fa-file-alt" name="All" />
          <SidebarLink icon="fa-trash" name="Deleted" />
        </ul>
      </Row>
      <Row className={styles.row}>
        <Categories
          handleClick={handleClick}
          notes={notes}
          setCategory={setCategory}
        />
      </Row>
      <Row className={styles.row}>
        <p>SIGN UP</p>
        <p>LOGIN</p>
      </Row>
    </Col>
  );
};

export default Sidebar;
