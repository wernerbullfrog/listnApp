import React, { useState, useEffect, useContext } from "react";
import { PageContainer, PageWrapper } from "../ComponentStylings/PageStyles";
import LoginBtn from "../Buttons/LoginBtn";
import LogoutButton from "../Buttons/LogOutBtn";
import ProfileLink from "../Buttons/ProfileLink";
import ListnLogoLink from "../Buttons/ListnLogoLink";
import { useAuth0 } from "@auth0/auth0-react";
import CreateRoomBtn from "../Buttons/CreateRoomBtn";
import RoomCreationModal from "../Modals/RoomCreationModal";
import { RoomContext } from "../Contexts/RoomContext";
import RoomCarousel from "./RoomCarousel";
import LinearProgress from "@mui/material/LinearProgress";
const LandingPage = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [modalOpen, setModalOpen] = useState(false);
  const {
    state: { Rooms },
    actions: { receiveRoomsFromServer },
  } = useContext(RoomContext);

  useEffect(() => {
    if (user) {
      fetch(`/api/rooms/`)
        .then((res) => res.json())
        .then((data) => {
          receiveRoomsFromServer(data);
        });
    } else {
      fetch(`/api/rooms/public`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          receiveRoomsFromServer(data);
        });
    }
  }, [isAuthenticated]);
  console.log(user);
  return Rooms ? (
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
        <RoomCarousel user={user} Rooms={Rooms} />
      </PageWrapper>
    </PageContainer>
  ) : (
    <LinearProgress color="secondary" />
  );
};

export default LandingPage;
