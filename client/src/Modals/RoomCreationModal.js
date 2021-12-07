import React, { useState } from "react";
import { BasicButton, SubmitButton } from "../ComponentStylings/ButtonsStyles";
import {
  StyledModal,
  Backdrop,
  ModalBox,
} from "../ComponentStylings/ModalStyling";
import RoomCreationForm from "../Inputs/RoomCreationForm";
import {
  CreateRoomForm,
  FormButtonWrapper,
} from "../ComponentStylings/FormStylings";
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
          <CreateRoomForm onSubmit={() => alert("YA DID IT")}>
            <RoomCreationForm />
            <FormButtonWrapper>
              <BasicButton onClick={() => handleClose()}>Close</BasicButton>
              <SubmitButton type="submit" value="Create!" />
            </FormButtonWrapper>
          </CreateRoomForm>
        </ModalBox>
      </StyledModal>
    </>
  );
};

export default RoomCreationModal;
