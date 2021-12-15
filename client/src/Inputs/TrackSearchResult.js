import React from "react";
import {
  ResultContainer,
  AlbumImg,
  TitleNameWrapper,
  Artist,
} from "../ComponentStylings/InputStylings";
import { useParams } from "react-router";
import { handleAddSong } from "../functions/handler";
const TrackSearchResult = ({ track, chooseTrack }) => {
  const { roomType, _id } = useParams();
  const handlePlay = () => {
    chooseTrack(track);
    handleAddSong(track, roomType, _id);
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
