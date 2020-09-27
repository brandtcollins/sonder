import React from "react";
import Button from "../../Button/Button";
import styles from "../Form.module.css";
import Avatar from "../../Avatar/Avatar";

const SignIn = (params) => {
  return (
    <div className={styles.Form}>
      <div className={styles.FormHeader}>
        <Avatar />
        <h1>Sign In</h1>
      </div>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
      </form>
      <Button>Sign In</Button>
    </div>
  );
};

export default SignIn;
