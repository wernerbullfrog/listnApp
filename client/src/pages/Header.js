import React from "react";
import ListnLogoLink from "../Buttons/ListnLogoLink";
import ProfileLink from "../Buttons/ProfileLink";
import { HeaderDiv } from "../ComponentStylings/PageStyles";
import LoginBtn from "../Buttons/LoginBtn";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <HeaderDiv>
      <ListnLogoLink />
      {!isAuthenticated ? <LoginBtn /> : <ProfileLink />}
    </HeaderDiv>
  );
};

export default Header;
