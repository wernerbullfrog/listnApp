import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BasicButton } from "../ComponentStylings/ButtonsStyles";
// the button that handles the auth0 login
const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();

  return <BasicButton onClick={() => loginWithRedirect()}>Log In</BasicButton>;
};

export default LoginBtn;
