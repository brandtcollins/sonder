import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <LoginContext.Provider value={{ modal: modal, setModal: setModal }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
