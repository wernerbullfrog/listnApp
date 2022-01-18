import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomCurrentUsers from "./RoomCurrentUsers";
import { LinearProgress } from "@mui/material";
import WebPlayback from "./SpotifyPlayer";
import Login from "./Login";
import { RoomContext } from "../Contexts/RoomContext";
import PlayedSong from "../pages/PlayedSong";
import SearchMusic from "../Inputs/SearchMusic";

import {
  RoomContainer,
  RoomWrapper,
  PlayedTracksWrapper,
  CurrentlyPlayingWrapper,
  CurrentSong,
} from "../ComponentStylings/RoomStyling";

const Room = () => {
  const { roomType, _id } = useParams();
  const [currentRoom, setCurrentRoom] = useState({});
  const { token, setThisRoomType, setRoom_Id, thisRoomType, room_Id } =
    useContext(RoomContext);
  const [searchSongs, setsearchSongs] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState([]);

  // this sets the room for the redirect after the callback
  useEffect(() => {
    setRoom_Id(_id);
    setThisRoomType(roomType);
  }, []);
  localStorage.setItem("thisRoomType", thisRoomType);
  localStorage.setItem("room_id", room_Id);
  // choose track chooses the track to be played
  const chooseTrack = (track) => {
    setPlayingTrack(track);
    setsearchSongs("");
  };
  // check to see if the user is logged in to initiate the
  // spotify player and search
  useEffect(() => {
    fetch("/login");
  }, []);
  //load the room
  useEffect(() => {
    fetch(`/api/${roomType}/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentRoom(data.result);
      });
  }, [playingTrack]);

  return (
    <>
      {currentRoom ? (
        <RoomContainer>
          <RoomWrapper>
            <>
              <h1>{currentRoom.roomName}</h1>
              <RoomCurrentUsers room={currentRoom} />
              {playingTrack ? (
                <CurrentlyPlayingWrapper>
                  <CurrentSong>song on deck</CurrentSong>
                  <CurrentSong>
                    {playingTrack.title} by: {playingTrack.artist}
                  </CurrentSong>
                </CurrentlyPlayingWrapper>
              ) : (
                <CurrentSong>
                  looks like nothings playing yet. Search for your favorite tune
                  to get things going!
                </CurrentSong>
              )}
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
            </>
          </RoomWrapper>
          <PlayedTracksWrapper>
            <ul>
              <h1>Played Tracks</h1>
              {currentRoom.playedSongs &&
                currentRoom.playedSongs.map((song) => (
                  <PlayedSong
                    key={Math.random() * 460000000}
                    song={song}
                    chooseTrack={chooseTrack}
                  />
                ))}
            </ul>
          </PlayedTracksWrapper>
        </RoomContainer>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </>
  );
};

export default Room;
