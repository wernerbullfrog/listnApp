import React from "react";
import { ModalCardBtn } from "../ComponentStylings/ButtonsStyles";
import { useNavigate } from "react-router-dom";

const JoinBtn = ({ room }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    if (room.roomType === "private") {
    } else {
      navigate(`/${room.roomType}/${room._id}`);
    }
  };

  return (
    <ModalCardBtn
      onClick={() => {
        handleClick();
      }}
    >
      Join!
    </ModalCardBtn>
  );
};
export default JoinBtn;
