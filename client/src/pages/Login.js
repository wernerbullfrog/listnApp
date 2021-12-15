import React from "react";
import { LoginLink } from "../ComponentStylings/ButtonsStyles";
import { BasicWrapper } from "../ComponentStylings/PageStyles";

const Login = () => {
  return (
    <LoginLink href="http://localhost:8000/auth/login">
      connect to Spotify
    </LoginLink>
  );
};

export default Login;
