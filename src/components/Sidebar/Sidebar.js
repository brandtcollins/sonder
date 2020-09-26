import React, { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import Categories from "./Categories/Categories";
import { Row, Col } from "react-bootstrap";
import styles from "./Sidebar.module.css";
import { NoteContext } from "../../context/NoteContext";

const Sidebar = (props) => {
  const noteContext = useContext(NoteContext);
  const { dispatch } = noteContext;

  const handleClick = (event) => {
    let parent = event.target.closest("li").getAttribute("name");
    dispatch({ type: "setCategory", payload: parent });
  };

  return (
    <Col xs={2} className={styles.sidebar}>
      <Avatar />
      <Row className={styles.row}>
        <Categories handleClick={handleClick} />
      </Row>
    </Col>
  );
};

export default Sidebar;
