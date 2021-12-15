import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomCurrentUsers from "./RoomCurrentUsers";
import { LinearProgress } from "@mui/material";
import WebPlayback from "./SpotifyPlayer";
import Login from "./Login";
import { RoomContext } from "../Contexts/RoomContext";
import PlayedSong from "../pages/PlayedSong";
import SearchMusic from "../Inputs/SearchMusic";
import ListnLogoLink from "../Buttons/ListnLogoLink";
import {
  RoomContainer,
  RoomWrapper,
  PlayedTracksWrapper,
} from "../ComponentStylings/RoomStyling";
const Room = ({ code }) => {
  const { roomType, _id } = useParams();
  const [currentRoom, setCurrentRoom] = useState({});
  const { token, setThisRoomType, setRoom_Id, thisRoomType, room_Id } =
    useContext(RoomContext);
  const [searchSongs, setsearchSongs] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  useEffect(() => {
    setRoom_Id(_id);
    setThisRoomType(roomType);
  }, []);
  localStorage.setItem("thisRoomType", thisRoomType);
  localStorage.setItem("room_id", room_Id);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
    setsearchSongs("");
  };
  useEffect(() => {
    fetch("/login");
  }, []);
  useEffect(() => {
    fetch(`/api/${roomType}/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentRoom(data.result);
      });
  }, []);

  if (currentRoom) {
    console.log(currentRoom);
  }
  return (
    <>
      <RoomContainer>
        <RoomWrapper>
          <ListnLogoLink />
          {currentRoom ? (
            <>
              <h1>{currentRoom.roomName}</h1>
              {playingTrack ? (
                <>
                  <h2>song on deck</h2>
                  <h3>
                    {playingTrack.title} by: {playingTrack.artist}
                  </h3>
                </>
              ) : (
                <h3>
                  looks like nothings playing yet. Search for your favorite tune
                  to get things going!
                </h3>
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
                interation bar (includes spotify buttons to follow artist/ like
                song / etc)
              </p>
            </>
          ) : (
            <LinearProgress color="secondary" />
          )}
        </RoomWrapper>
        <PlayedTracksWrapper>
          <ul>
            <h1>Played Tracks</h1>
            {currentRoom.playedSongs &&
              currentRoom.playedSongs.map((song) => (
                <PlayedSong song={song} chooseTrack={chooseTrack} />
              ))}
          </ul>
        </PlayedTracksWrapper>
      </RoomContainer>
    </>
  );
};

export default Room;
