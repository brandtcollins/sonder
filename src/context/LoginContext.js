import React, { createContext, useState } from "react";

const initialState = {
  modal: false,
  signIn: false,
  register: false,
};

export const LoginContext = createContext(initialState);

const LoginContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <LoginContext.Provider value={{ state: state, setState: setState }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
