import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomCurrentUsers from "./RoomCurrentUsers";
import { LinearProgress } from "@mui/material";
const Room = () => {
  const { roomType, _id } = useParams();
  const [currentRoom, setCurrentRoom] = useState({});
  useEffect(() => {
    fetch(`/api/${roomType}/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentRoom(data.result);
      });
  }, []);
  console.log(currentRoom);
  return (
    <>
      {currentRoom ? (
        <>
          <h1>{currentRoom.roomName}</h1>
          <p>song currently playing</p>
          <div>
            <button>Skip</button>
            <button>Bump</button>
          </div>
          <p>
            current listn'rs'
            <RoomCurrentUsers room={currentRoom} />
          </p>
          <p>
            interation bar (includes spotify buttons to follow artist/ like song
            / etc)
          </p>
        </>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </>
  );
};

export default Room;
