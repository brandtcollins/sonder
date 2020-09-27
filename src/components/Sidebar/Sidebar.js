import React, { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import Categories from "./Categories/Categories";
import { Row, Col } from "react-bootstrap";
import styles from "./Sidebar.module.css";
import { NoteContext } from "../../context/NoteContext";
import { LoginContext } from "../../context/LoginContext";

const Sidebar = () => {
  const noteContext = useContext(NoteContext);
  const { dispatch } = noteContext;
  const loginContext = useContext(LoginContext);
  const { modal, setModal } = loginContext;

  const handleClick = (event) => {
    let parent = event.target.closest("li").getAttribute("name");
    dispatch({ type: "setCategory", payload: parent });
  };

  const handleButtonClick = (event) => {
    setModal(!modal);
    console.log(`button clicked`);
  };

  return (
    <Col xs={2} className={styles.sidebar}>
      <Avatar />
      <Row className={styles.row}>
        <Categories handleClick={handleClick} />
      </Row>
      <Row className={styles.footer}>
        <button onClick={handleButtonClick}>Signup</button>
        <button onClick={handleButtonClick}>Login</button>
      </Row>
    </Col>
  );
};

export default Sidebar;
