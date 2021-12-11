import React from "react";
import RoomCurrentUsers from "./RoomCurrentUsers";
import {
  CardWrapper,
  Title,
  UsersWrapper,
  UserImage,
} from "../ComponentStylings/CardStylings";
import JoinBtn from "../Buttons/JoinBtn";
const RoomCard = ({ room }) => {
  return (
    <CardWrapper>
      <Title>{room.roomName}</Title>
      <UsersWrapper>
        <Title>other listn'rs</Title>
        <RoomCurrentUsers room={room} />
      </UsersWrapper>
      <JoinBtn room={room} />
    </CardWrapper>
  );
};
export default RoomCard;
