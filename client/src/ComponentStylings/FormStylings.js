import styled from "styled-components";

export const CreateRoomForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormDiv = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormButtonWrapper = styled.div`
  position: absolute;
  top: 24em;
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Input = styled.input.attrs({ type: "text" })`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: white solid thin;
  background-color: transparent;
  color: white;
`;

export const InputWrapper = styled.div``;
