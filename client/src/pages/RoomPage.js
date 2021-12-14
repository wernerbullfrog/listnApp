import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomCurrentUsers from "./RoomCurrentUsers";
import { LinearProgress } from "@mui/material";
import WebPlayback from "./SpotifyPlayer";
import Login from "./Login";
import { RoomContext } from "../Contexts/RoomContext";
const Room = ({ code }) => {
  const { roomType, _id } = useParams();
  const [currentRoom, setCurrentRoom] = useState({});
  const { token } = useContext(RoomContext);

  useEffect(() => {
    fetch("/login");
  });
  useEffect(() => {
    fetch(`/api/${roomType}/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentRoom(data.result);
      });
  }, []);
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
          {token === "" ? <Login /> : <WebPlayback token={token} />}
          <p>current listn'rs'</p>
          <RoomCurrentUsers room={currentRoom} />
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
