import { LinearProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoomContext } from "../Contexts/RoomContext";
// This page is only used from the backend as a redirect
// to obtain the access token required for the spotify api to work
const Callback = ({ code }) => {
  const { setToken } = useContext(RoomContext);
  const navigate = useNavigate();
  let thisRoomType = localStorage.getItem("thisRoomType");
  let room_Id = localStorage.getItem("room_id");
  useEffect(() => {
    if (thisRoomType && room_Id) {
      fetch(`/callback/${code}`)
        .then((res) => res.json())
        .then((data) => {
          setToken(data.access_token);
          navigate(`/${thisRoomType}/${room_Id}`);
        });
    } else return;
  }, [thisRoomType, room_Id]);
  return <LinearProgress />;
};

export default Callback;
