import React from "react";
import styles from "../Form.module.css";
import Avatar from "../../Avatar/Avatar";
import Button from "../../Button/Button";

const SignIn = (params) => {
  return (
    <div className={styles.Form}>
      <div className={styles.FormHeader}>
        <Avatar />
        <h1>Register</h1>
      </div>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
        <input placeholder="confirm password" />
      </form>
      <Button>Create Account</Button>
    </div>
  );
};

export default SignIn;
