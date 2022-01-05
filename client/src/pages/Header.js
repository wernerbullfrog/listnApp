import React from "react";
import ListnLogoLink from "../Buttons/ListnLogoLink";
import ProfileLink from "../Buttons/ProfileLink";
import { HeaderDiv } from "../ComponentStylings/PageStyles";
const Header = () => {
  return (
    <HeaderDiv>
      <ListnLogoLink />
      <ProfileLink />
    </HeaderDiv>
  );
};

export default Header;
