import React, { useContext } from "react";
import styles from "./Backdrop.module.css";
import { LoginContext } from "../../../context/LoginContext";

const Backdrop = (props) => {
  const loginContext = useContext(LoginContext);
  const { state, setState } = loginContext;

  const handleClick = (params) => {
    setState({ ...state, modal: false, signIn: false, register: false });
  };
  return props.show ? (
    <div className={styles.Backdrop} onClick={handleClick}></div>
  ) : null;
};

export default Backdrop;
