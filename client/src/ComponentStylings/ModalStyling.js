import ModalUnstyled from "@mui/base/ModalUnstyled";
import styled from "styled-components";

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  height: 22em;
  width: 15em;
  background-color: black;
  box-shadow: 0px 0px 46px -15px rgba(300, 300, 300, 0.1);
  border-radius: 15px;
  border: solid thick rgba(153, 153, 153, 0.35);
`;

export const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(300, 300, 300, 0.1);
  -webkit-tap-highlight-color: transparent;
`;
