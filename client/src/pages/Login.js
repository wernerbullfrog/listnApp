import React from "react";
import { LoginLink } from "../ComponentStylings/ButtonsStyles";

const Login = () => {
  return (
    <LoginLink href="http://localhost:8000/auth/login">
      connect to Spotify
    </LoginLink>
  );
};

export default Login;
