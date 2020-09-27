import React, { Fragment, useContext } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";
import { LoginContext } from "../../../context/LoginContext";
import Avatar from "../../Avatar/Avatar";
import FormSwitcher from "../../Form/FormSwitcher";
import Forms from "../../Form/Forms/Forms";

const Modal = (props) => {
  const loginContext = useContext(LoginContext);
  const { state } = loginContext;
  return (
    <Fragment>
      <Backdrop show={state.modal} />
      <div
        className={styles.Modal}
        style={{
          transform: state.modal ? "translateY(0)" : "translateY(-100vh)",
          opacity: state.modal ? "1" : "0",
        }}
      >
        <FormSwitcher />
        <Avatar />
        <Forms />
      </div>
    </Fragment>
  );
};

export default Modal;
