import React, { useState } from "react";
import {
  FormDiv,
  InputWrapper,
  Input,
} from "../ComponentStylings/FormStylings";

const RoomCreationForm = ({ setRoomName, setPasscode, setRoomType }) => {
  const [checked, setChecked] = useState(false);
  if (checked) {
    setRoomType("private");
  } else {
    setRoomType("public");
  }
  return (
    <>
      <InputWrapper>
        <FormDiv>
          <p>Name your Listn' Room:</p>
          <Input onChange={(e) => setRoomName(e.target.value)} />
        </FormDiv>
        <FormDiv>
          <p> Would you like to make this room private?</p>
          <label>
            <input
              type="Checkbox"
              name="MakePublic"
              onChange={() => setChecked(!checked)}
            />
            Sure!
          </label>
        </FormDiv>
        {checked && (
          <FormDiv>
            <p>
              Shhhh... set a passcode so that only your friends can listn' with
              you!
            </p>
            <Input onChange={(e) => setPasscode(e.target.value)} />
          </FormDiv>
        )}
      </InputWrapper>
    </>
  );
};

export default RoomCreationForm;
