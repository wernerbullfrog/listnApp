import React from "react";
import { BasicButton } from "../ComponentStylings/ButtonsStyles";
// button that launches the modal form to create a new Room
const CreateRoomBtn = ({ setModalOpen }) => {
  const handleOpen = () => {
    setModalOpen(true);
  };
  return <BasicButton onClick={() => handleOpen()}>Create a Room</BasicButton>;
};

export default CreateRoomBtn;
