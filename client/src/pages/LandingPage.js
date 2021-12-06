import React from "react";
import { PageContainer } from "../ComponentStylings/PageStyles";
import LoginBtn from "../Buttons/LoginBtn";
import LogoutButton from "../Buttons/LogOutBtn";
import ProfileLink from "../Buttons/ProfileLink";
import ListnLogoLink from "../Buttons/ListnLogoLink";
import { useAuth0 } from "@auth0/auth0-react";
const LandingPage = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <PageContainer>
      <ListnLogoLink />
      {!isAuthenticated && <LoginBtn />}
      <ProfileLink />
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </PageContainer>
  );
};

export default LandingPage;
