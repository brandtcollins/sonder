import { useContext } from "react";
import fire from "../../firebase";
import { LoginContext } from "../../context/LoginContext";

export const LogIn = (user) => {
  const loginContext = useContext(LoginContext);
  const { setLoggedIn } = loginContext;

  setLoggedIn(true);

  const ref = fire.database().ref("users");
  const obj = {
    user: user,
  };
  ref.push(obj);
};
