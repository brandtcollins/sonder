import React, { useState } from "react";
import styles from "../Form.module.css";
import Avatar from "../../Avatar/Avatar";
import Button from "../../Button/Button";
import { LogIn } from "../../../utils/LogIn/LogIn";
import fire from "../../../firebase";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    if (credentials.password === credentials.passwordConfirm) {
      fire
        .auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            default:
              console.log(err.message);
          }
        });
      setCredentials({
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } else {
      setPasswordError(`Passwords do not match.`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className={styles.Form}>
      <div className={styles.FormHeader}>
        <Avatar />
        <h1>Register</h1>
      </div>
      <form id="register" onSubmit={handleRegister}>
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
        <input
          onChange={handleChange}
          name="passwordConfirm"
          type="password"
          value={credentials.passwordConfirm}
          placeholder="confirm password"
        />
      </form>
      <Button type="submit" form="register" value="Submit">
        Create Account
      </Button>
    </div>
  );
};

export default SignIn;
