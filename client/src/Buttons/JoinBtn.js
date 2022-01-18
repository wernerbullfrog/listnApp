import React from "react";
import { ModalCardBtn } from "../ComponentStylings/ButtonsStyles";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { handleJoin } from "../functions/handler";

const JoinBtn = ({ room, setModalOpen }) => {
  const { user } = useAuth0();
  let navigate = useNavigate();
  let allowedUser;

  // this handleClick finds whether the user already has access
  // to a room by being and "allowedUser" if so the user is immediatly redirected
  // to the listening rooms page
  // if not the user is added to the rooms Users then the redirect occurs
  // if the room is private and the user is not authorized to then the handleClick
  // opens the passcode modal

  const handleClick = () => {
    if (room.roomType === "public" && !user) {
      navigate(`/${room.roomType}/${room._id}`);
    }
    if (room.roomType === "private") {
      room.roomUsers.forEach((roomUser) => {
        allowedUser = roomUser.userName === user.nickname;
      });
      if (allowedUser) {
        navigate(`/${room.roomType}/${room._id}`);
      } else {
        setModalOpen(true);
      }
      if (allowedUser) {
        navigate(`/${room.roomType}/${room._id}`);
      } else {
        handleJoin(user, room);
        navigate(`/${room.roomType}/${room._id}`);
      }
    }
  };
  return (
    <>
      {user || room.roomType === "public" ? (
        <ModalCardBtn
          onClick={() => {
            handleClick();
          }}
        >
          Join!
        </ModalCardBtn>
      ) : null}
    </>
  );
};
export default JoinBtn;
