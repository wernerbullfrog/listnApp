import React from "react";
import { ModalCardBtn } from "../ComponentStylings/ButtonsStyles";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { handleJoin } from "../functions/handler";

const JoinBtn = ({ room, setModalOpen }) => {
  const { user } = useAuth0();
  let userName = {};

  let navigate = useNavigate();
  let allowedUser;
  const handleClick = () => {
    room.roomUsers.forEach((roomUser) => {
      allowedUser = roomUser.userName === user.nickname;
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
      {user ? (
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
