import React, { useState } from "react";
import RoomCurrentUsers from "./RoomCurrentUsers";
import PassCodeModal from "../Modals/PassCodeModal";
import {
  CardWrapper,
  Title,
  UsersWrapper,
} from "../ComponentStylings/CardStylings";
import JoinBtn from "../Buttons/JoinBtn";
const RoomCard = ({ room }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <CardWrapper>
      <Title>{room.roomName}</Title>
      <UsersWrapper>
        <Title>other listn'rs</Title>
        <PassCodeModal
          room={room}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        <RoomCurrentUsers room={room} />
      </UsersWrapper>
      <JoinBtn room={room} setModalOpen={setModalOpen} />
    </CardWrapper>
  );
};
export default RoomCard;
