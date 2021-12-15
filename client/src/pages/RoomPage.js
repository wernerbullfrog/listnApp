import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomCurrentUsers from "./RoomCurrentUsers";
import { LinearProgress } from "@mui/material";
import WebPlayback from "./SpotifyPlayer";
import Login from "./Login";
import { RoomContext } from "../Contexts/RoomContext";
import SearchMusic from "../Inputs/SearchMusic";
import { ListnLogoLinkButton } from "../ComponentStylings/ButtonsStyles";
import ListnLogoLink from "../Buttons/ListnLogoLink";

const Room = ({ code }) => {
  const { roomType, _id } = useParams();
  const [currentRoom, setCurrentRoom] = useState({});
  const { token } = useContext(RoomContext);
  const [searchSongs, setsearchSongs] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const chooseTrack = (track) => {
    setPlayingTrack(track);
    setsearchSongs("");
  };
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
      <ListnLogoLink />
      {currentRoom ? (
        <>
          <h1>{currentRoom.roomName}</h1>
          {playingTrack ? (
            <>
              <h2>song on deck</h2>
              <span>
                {playingTrack.title} by: {playingTrack.artist}
              </span>
            </>
          ) : (
            <div>
              looks like nothings playing yet. Search for your favorite tune to
              get things going!
            </div>
          )}
          {/* <div>
            <button>Skip</button>
            <button>Bump</button>
          </div> */}
          {token === "" ? (
            <Login />
          ) : (
            <>
              <WebPlayback token={token} trackUri={playingTrack?.uri} />
              <SearchMusic
                token={token}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                searchSongs={searchSongs}
                setsearchSongs={setsearchSongs}
                chooseTrack={chooseTrack}
              />
            </>
          )}
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
