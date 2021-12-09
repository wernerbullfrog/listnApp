import React from "react";
import {
  CardWrapper,
  Title,
  UsersWrapper,
  UserImage,
} from "../ComponentStylings/CardStylings";
import JoinBtn from "../Buttons/JoinBtn";
const RoomCard = ({ room }) => {
  console.log(room.roomUsers.forEach((user) => console.log(user.profileImg)));
  return (
    <CardWrapper>
      <Title>{room.roomName}</Title>
      <UsersWrapper>
        <Title>other listn'rs</Title>
        {room.roomUsers.map((user) => (
          <UserImage src={user.profileImg} />
        ))}
      </UsersWrapper>
      <JoinBtn room={room} />
    </CardWrapper>
  );
};
export default RoomCard;
