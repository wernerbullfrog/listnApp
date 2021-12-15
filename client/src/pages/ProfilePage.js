import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ListnLogoLink from "../Buttons/ListnLogoLink";
import { ProfileWrapper, PageWrapper } from "../ComponentStylings/PageStyles";
import { LinearProgress } from "@mui/material";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <PageWrapper>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          <ListnLogoLink />
          {isAuthenticated && (
            <ProfileWrapper>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </ProfileWrapper>
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default Profile;
