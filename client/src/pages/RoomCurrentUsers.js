import { LinearProgress } from "@mui/material";
import React from "react";
import {
  UsersWrapper,
  Title,
  UserImage,
} from "../ComponentStylings/CardStylings";

const RoomCurrentUsers = ({ room }) => {
  console.log(room);
  return room.roomUsers ? (
    <UsersWrapper key={Math.random() * 460000000}>
      {room.roomUsers.map((user) => (
        <UserImage key={Math.random() * 460000000} src={user.profileImg} />
      ))}
    </UsersWrapper>
  ) : (
    <LinearProgress color="secondary" />
  );
};

export default RoomCurrentUsers;
