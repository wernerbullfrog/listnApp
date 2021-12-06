import React from "react";

const Room = () => {
  return (
    <>
      <h1>ROOM NAME</h1>
      <p>song currently playing</p>
      <div>
        <button>Skip</button>
        <button>Bump</button>
      </div>
      <p>
        current listnrs'(a list of all the users allowed in this room profile
        images are greyed out for absent members)
      </p>
      <p>
        interation bar (includes spotify buttons to follow artist/ like song /
        etc)
      </p>
    </>
  );
};

export default Room;
