import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import SignIn from "../../Form/Forms/Signin";
import Register from "../../Form/Forms/Register";

const Forms = (params) => {
  const loginContext = useContext(LoginContext);
  const { register, signIn } = loginContext.state;

  let form;
  if (register) {
    form = <Register />;
  }
  if (signIn) {
    form = <SignIn />;
  }

  return <>{form}</>;
};

export default Forms;
