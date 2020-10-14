import React, { useState } from "react";
import Button from "../../Button/Button";
import styles from "../Form.module.css";
import Avatar from "../../Avatar/Avatar";
import fire from "../../../firebase";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignin = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
          default:
            console.log(error.message);
        }
      });
  };

  return (
    <div className={styles.Form}>
      <div className={styles.FormHeader}>
        <Avatar />
        <h1>Sign In</h1>
      </div>
      <form id="signin" onSubmit={handleSignin}>
        <input
          onChange={handleChange}
          name="email"
          placeholder="email"
          value={credentials.email}
          type="email"
        />
        <p>{emailError}</p>
        <input
          onChange={handleChange}
          name="password"
          placeholder="password"
          type="password"
          value={credentials.password}
        />
        <p>{passwordError}</p>
      </form>
      <Button type="submit" form="signin" value="Submit">
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
