import React from "react";
import {
  ResultContainer,
  AlbumImg,
  TitleNameWrapper,
  Artist,
} from "../ComponentStylings/InputStylings";
const PlayedSong = ({ song, chooseTrack }) => {
  const handlePlay = () => {
    chooseTrack(song);
  };
  return (
    <>
      {song ? (
        <ResultContainer onClick={() => handlePlay()}>
          <AlbumImg src={song.albumUrl} />
          <TitleNameWrapper>{song.title}</TitleNameWrapper>
          <Artist>{song.artist}</Artist>
        </ResultContainer>
      ) : null}
    </>
  );
};
export default PlayedSong;
