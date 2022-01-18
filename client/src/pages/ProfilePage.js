import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { ProfileWrapper, PageWrapper } from "../ComponentStylings/PageStyles";
import LogOutBtn from "../Buttons/LogOutBtn";
import { LinearProgress } from "@mui/material";
import LoginBtn from "../Buttons/LoginBtn";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <PageWrapper>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          {isAuthenticated ? (
            <ProfileWrapper>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <LogOutBtn />
            </ProfileWrapper>
          ) : (
            <>
              <p>Uh Oh! Looks like you're not logged in </p>
              <p>click the button below to view your profile</p>
              <LoginBtn />
            </>
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default Profile;
