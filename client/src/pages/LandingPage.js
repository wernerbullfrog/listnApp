import React, { useState } from "react";
import { PageContainer, PageWrapper } from "../ComponentStylings/PageStyles";
import LoginBtn from "../Buttons/LoginBtn";
import LogoutButton from "../Buttons/LogOutBtn";
import ProfileLink from "../Buttons/ProfileLink";
import ListnLogoLink from "../Buttons/ListnLogoLink";
import { useAuth0 } from "@auth0/auth0-react";
import CreateRoomBtn from "../Buttons/CreateRoomBtn";
import RoomCreationModal from "../Modals/RoomCreationModal";
const LandingPage = () => {
  const { isAuthenticated } = useAuth0();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <PageContainer>
      <PageWrapper>
        <ListnLogoLink />
        {!isAuthenticated && <LoginBtn />}
        {isAuthenticated && (
          <>
            <CreateRoomBtn setModalOpen={setModalOpen} />
            <RoomCreationModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
            <LogoutButton />
            <ProfileLink />
          </>
        )}
      </PageWrapper>
    </PageContainer>
  );
};

export default LandingPage;
