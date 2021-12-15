import React, { useState } from "react";
import {
  PasscodeModalBox,
  StyledModal,
  Backdrop,
  ButtonWrapper,
} from "../ComponentStylings/ModalStyling";
import { ModalCardBtn } from "../ComponentStylings/ButtonsStyles";
import { handleJoin } from "../functions/handler";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import { Input } from "../ComponentStylings/FormStylings";
const PassCodeModal = ({ room, modalOpen, setModalOpen }) => {
  let navigate = useNavigate();
  const { user } = useAuth0();
  const [closeModal, setCloseModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleClose = () => {
    setCloseModal(true);
    setModalOpen(false);
  };
  const handleClick = () => {
    if (inputValue === room.passcode) {
      handleJoin(user, room);
      navigate(`/${room.roomType}/${room._id}`);
    } else return;
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
        <PasscodeModalBox>
          <h3>Enter the passcode to join!</h3>
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <ButtonWrapper>
            <ModalCardBtn onClick={() => handleClose()}>Cancel</ModalCardBtn>
            <ModalCardBtn onClick={() => handleClick()}>JOIN!</ModalCardBtn>
          </ButtonWrapper>
        </PasscodeModalBox>
      </StyledModal>
    </>
  );
};

export default PassCodeModal;
