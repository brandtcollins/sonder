import React, { createContext, useState, useEffect } from "react";
import fire from "../firebase";

const initialState = {
  modal: false,
  signIn: false,
  register: false,
};

export const LoginContext = createContext(initialState);

const LoginContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUser(user);
        setState({ ...state, modal: false });
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <LoginContext.Provider
      value={{
        state: state,
        setState: setState,
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn,
        user: user,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
