import React from "react";
import {
  ResultContainer,
  AlbumImg,
  TitleNameWrapper,
  Artist,
} from "../ComponentStylings/InputStylings";
const TrackSearchResult = ({ track, chooseTrack }) => {
  const handlePlay = () => {
    chooseTrack(track);
  };
  return (
    <ResultContainer
      onClick={() => {
        handlePlay();
      }}
    >
      <AlbumImg src={track.albumUrl} />
      <TitleNameWrapper>
        <div>{track.title}</div>
        <Artist>{track.artist}</Artist>
      </TitleNameWrapper>
    </ResultContainer>
  );
};

export default TrackSearchResult;
