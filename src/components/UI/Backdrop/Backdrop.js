import React, { useContext } from "react";
import styles from "./Backdrop.module.css";
import { LoginContext } from "../../../context/LoginContext";

const Backdrop = (props) => {
  const loginContext = useContext(LoginContext);
  const { setModal } = loginContext;

  const handleClick = (params) => {
    setModal(false);
  };
  return props.show ? (
    <div className={styles.Backdrop} onClick={handleClick}></div>
  ) : null;
};

export default Backdrop;
