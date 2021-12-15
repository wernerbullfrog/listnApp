// FUNCTIONS AND UTILS //
import React, { useState } from "react";
import { handleSubmit } from "../functions/handler";
//* VARIABLES * //
import { useAuth0 } from "@auth0/auth0-react";
////////////////////////////////////////
//************* STYLING **************//
///////////////////////////////////////
import { ModalCardBtn, SubmitButton } from "../ComponentStylings/ButtonsStyles";
import {
  StyledModal,
  Backdrop,
  ModalBox,
} from "../ComponentStylings/ModalStyling";
import {
  CreateRoomForm,
  FormButtonWrapper,
} from "../ComponentStylings/FormStylings";
////////////////////////////////////////
//************ Components ************//
///////////////////////////////////////

import RoomCreationForm from "../Inputs/RoomCreationForm";

const RoomCreationModal = ({ modalOpen, setModalOpen }) => {
  const [closeModal, setCloseModal] = useState(false);
  const handleClose = () => {
    setCloseModal(true);
    setModalOpen(false);
  };
  const { user } = useAuth0();
  const [roomType, setRoomType] = useState("public");
  const [roomName, setRoomName] = useState("");
  const [passcode, setPasscode] = useState("");

  const formData = {
    roomName: roomName,
    passcode: passcode,
    roomType: roomType,
    currentUser: { userName: user.nickname, profileImg: user.picture },
    roomUsers: [{ userName: user.nickname, profileImg: user.picture }],
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
          <CreateRoomForm
            onSubmit={(e) => {
              handleSubmit(e, formData, roomType);
              handleClose();
            }}
          >
            <RoomCreationForm
              setRoomName={setRoomName}
              setPasscode={setPasscode}
              setRoomType={setRoomType}
              formData={formData}
            />
            <FormButtonWrapper>
              <ModalCardBtn onClick={() => handleClose()}>Close</ModalCardBtn>
              <SubmitButton type="submit" value="Create!" />
            </FormButtonWrapper>
          </CreateRoomForm>
        </ModalBox>
      </StyledModal>
    </>
  );
};

export default RoomCreationModal;
