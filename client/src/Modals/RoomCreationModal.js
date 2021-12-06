import React, { useState } from "react";
import { BasicButton } from "../ComponentStylings/ButtonsStyles";
import {
  StyledModal,
  Backdrop,
  ModalBox,
} from "../ComponentStylings/ModalStyling";
import RoomCreationForm from "../Inputs/RoomCreationForm";

const RoomCreationModal = ({ modalOpen, setModalOpen }) => {
  const [closeModal, setCloseModal] = useState(false);
  const handleClose = () => {
    setCloseModal(true);
    setModalOpen(false);
  };
  return (
    <>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={modalOpen}
        onClose={closeModal}
        BackdropComponent={Backdrop}
      >
        <ModalBox>
          <RoomCreationForm />
          <BasicButton onClick={() => handleClose()}>Close</BasicButton>
        </ModalBox>
      </StyledModal>
    </>
  );
};

export default RoomCreationModal;
