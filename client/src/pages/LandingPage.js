import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LinearProgress from "@mui/material/LinearProgress";
import { RoomContext } from "../Contexts/RoomContext";
// compoonents

import CreateRoomBtn from "../Buttons/CreateRoomBtn";
import RoomCreationModal from "../Modals/RoomCreationModal";
import RoomCarousel from "./RoomCarousel";
//styles
import {
  PageContainer,
  PageWrapper,
  WelcomeWrapper,
} from "../ComponentStylings/PageStyles";

const LandingPage = () => {
  const { isAuthenticated, user } = useAuth0();
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
          receiveRoomsFromServer(data);
        });
    }
  }, [isAuthenticated]);
  return Rooms ? (
    <PageContainer>
      <PageWrapper>
        {isAuthenticated && (
          <>
            <WelcomeWrapper>
              <h3>
                Welcome back listn'r now that you're logged in you can join a
                private room or create new one!
              </h3>
              <CreateRoomBtn setModalOpen={setModalOpen} />
              <RoomCreationModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            </WelcomeWrapper>
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
