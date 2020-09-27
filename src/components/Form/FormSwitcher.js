import React, { useContext } from "react";
import styles from "./Form.module.css";
import { LoginContext } from "../../context/LoginContext";

const FormSwitcher = () => {
  const loginContext = useContext(LoginContext);
  const { state, setState } = loginContext;
  const { signIn, register } = loginContext.state;

  const handleClick = (event) => {
    const { name } = event.target.closest("button");
    setState({ ...state, signIn: false, register: false, [name]: true });
  };

  return (
    <div className={styles.FormSwitcher}>
      <button
        name="signIn"
        className={signIn ? styles.active : null}
        onClick={handleClick}
      >
        <span>Sign in</span>
      </button>
      <button
        className={register ? styles.active : null}
        name="register"
        onClick={handleClick}
      >
        <span>Register</span>
      </button>
    </div>
  );
};

export default FormSwitcher;
