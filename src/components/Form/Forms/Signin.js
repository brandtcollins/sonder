import React from "react";
import Button from "../../Button/Button";

const SignIn = (params) => {
  return (
    <>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
      </form>
      <Button>Sign In</Button>
    </>
  );
};

export default SignIn;
