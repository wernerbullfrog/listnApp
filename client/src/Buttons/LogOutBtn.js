import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogInOutButton } from "../ComponentStylings/ButtonsStyles";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <LogInOutButton
      onClick={() => logout({ returnTo: "http://localhost:3000/" })}
    >
      Log Out
    </LogInOutButton>
  );
};

export default LogoutButton;