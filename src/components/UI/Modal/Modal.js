import React, { Fragment, useContext } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";
import { LoginContext } from "../../../context/LoginContext";
import Avatar from "../../Avatar/Avatar";
import Button from "../../Button/Button";

const Modal = (props) => {
  const loginContext = useContext(LoginContext);
  const { modal } = loginContext;
  return (
    <Fragment>
      <Backdrop show={modal} />
      <div
        className={styles.Modal}
        style={{
          transform: modal ? "translateY(0)" : "translateY(-100vh)",
          opacity: modal ? "1" : "0",
        }}
      >
        <Avatar />
        <Button>Login</Button>
      </div>
    </Fragment>
  );
};

export default Modal;
