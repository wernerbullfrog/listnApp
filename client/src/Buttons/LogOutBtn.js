import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BasicButton } from "../ComponentStylings/ButtonsStyles";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <BasicButton onClick={() => logout({ returnTo: "http://localhost:3000/" })}>
      Log Out
    </BasicButton>
  );
};

export default LogoutButton;
