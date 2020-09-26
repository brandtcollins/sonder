import React from "react";
import Avatar from "../Avatar/Avatar";
import Categories from "./Categories/Categories";
import { Row, Col } from "react-bootstrap";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const { notes, setCategory } = props;

  const handleClick = (event) => {
    let parent = event.target.closest("li").getAttribute("name");
    setCategory(parent);
  };

  return (
    <Col xs={2} className={styles.sidebar}>
      <Avatar />
      <Row className={styles.row}>
        <Categories
          handleClick={handleClick}
          notes={notes}
          setCategory={setCategory}
        />
      </Row>
    </Col>
  );
};

export default Sidebar;
