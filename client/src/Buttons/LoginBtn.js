import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogInOutButton } from "../ComponentStylings/ButtonsStyles";

const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <LogInOutButton onClick={() => loginWithRedirect()}>Log In</LogInOutButton>
  );
};

export default LoginBtn;
