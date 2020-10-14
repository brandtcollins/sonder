import React, { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import Categories from "./Categories/Categories";
import { Row, Col } from "react-bootstrap";
import styles from "./Sidebar.module.scss";
import { NoteContext } from "../../context/NoteContext";
import { LoginContext } from "../../context/LoginContext";
import fire from "../../firebase";

const Sidebar = () => {
  const noteContext = useContext(NoteContext);
  const { dispatch } = noteContext;
  const loginContext = useContext(LoginContext);
  const { state, setState, loggedIn } = loginContext;

  const handleClick = (event) => {
    let parent = event.target.closest("li").getAttribute("name");
    dispatch({ type: "setCategory", payload: parent });
  };

  const handleButtonClick = (event) => {
    const { name } = event.target;
    setState({ ...state, modal: !state.modal, [name]: !state[name] });
    console.log(event.target.name);
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  let actions = (
    <>
      <button onClick={handleButtonClick} name="signIn">
        Sign In
      </button>
      <button onClick={handleButtonClick} name="register">
        Register
      </button>
    </>
  );

  if (loggedIn) {
    actions = (
      <button onClick={handleLogOut} name="logout">
        Logout
      </button>
    );
  }

  return (
    <Col xs={2} className={styles.sidebar}>
      <div className={styles.avatar}>
        <Avatar />
      </div>
      <Row className={styles.row}>
        <Categories handleClick={handleClick} />
      </Row>
      <Row className={styles.footer}>{actions}</Row>
    </Col>
  );
};

export default Sidebar;
