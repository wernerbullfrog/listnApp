import React from "react";
import { BasicButton } from "../ComponentStylings/ButtonsStyles";

const CreateRoomBtn = ({ setModalOpen }) => {
  const handleOpen = () => {
    setModalOpen(true);
  };
  return <BasicButton onClick={() => handleOpen()}>Create a Room</BasicButton>;
};

export default CreateRoomBtn;
