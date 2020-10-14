import React from "react";
import styles from "./Button.module.css";

const RoundButton = (props) => {
  const { type, form, value } = props;
  return (
    <button
      type={type}
      form={form}
      value={value}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default RoundButton;
