import React from "react";
import { ModalCardBtn } from "../ComponentStylings/ButtonsStyles";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { handleJoin } from "../functions/handler";

const JoinBtn = ({ room, setModalOpen }) => {
  const { user } = useAuth0();
  let navigate = useNavigate();
  let allowedUser;
  const handleClick = () => {
    room.roomUsers.forEach((roomUser) => {
      allowedUser = roomUser.userName === user.nickname;
      console.log(room);
    });
    if (room.roomType === "private") {
      if (allowedUser) {
        navigate(`/${room.roomType}/${room._id}`);
      } else {
        setModalOpen(true);
      }
    } else {
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
      <ModalCardBtn
        onClick={() => {
          handleClick();
        }}
      >
        Join!
      </ModalCardBtn>
    </>
  );
};
export default JoinBtn;
