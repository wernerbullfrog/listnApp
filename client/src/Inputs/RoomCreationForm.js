import React, { useState } from "react";

const RoomCreationForm = () => {
  const [name, setName] = useState("");

  return (
    <>
      <form onSubmit={() => alert("YA DID IT")}>
        <label>
          Name your Listn' Room:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Would you like to make this room public?
          <input type="Checkbox" id="MakePublic" name="MakePublic" />
          <label for="MakePublic">Sure!</label>
        </label>
        <input type="submit" value="Create!" />
      </form>
    </>
  );
};

export default RoomCreationForm;
