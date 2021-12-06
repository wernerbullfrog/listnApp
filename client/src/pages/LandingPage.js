import React from "react";
import { PageContainer, ListnLogo } from "../ComponentStylings/PageStyles";
import LoginBtn from "../Buttons/LoginBtn";
import LogoutButton from "../Buttons/LogOutBtn";
import Profile from "./ProfilePage";
const LandingPage = () => {
  return (
    <PageContainer>
      <ListnLogo>listn'</ListnLogo>
      <LoginBtn />
      <LogoutButton />
      <Profile />
    </PageContainer>
  );
};

export default LandingPage;
