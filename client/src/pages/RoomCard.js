import React from "react";
import { CardWrapper, Title } from "../ComponentStylings/CardStylings";
import JoinBtn from "../Buttons/JoinBtn";
const RoomCard = ({ room }) => {
  return (
    <CardWrapper>
      <Title>{room.Name}</Title>
      <JoinBtn room={room} />
    </CardWrapper>
  );
};
export default RoomCard;
