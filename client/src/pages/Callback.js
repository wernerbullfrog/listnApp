import { LinearProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoomContext } from "../Contexts/RoomContext";

const Callback = ({ code }) => {
  const { setToken } = useContext(RoomContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/callback/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setToken(data.access_token);
        navigate("/");
      });
  }, []);
  return <LinearProgress />;
};

export default Callback;
