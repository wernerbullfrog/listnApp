import styled from "styled-components";

export const RoomContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

export const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PlayedTracksWrapper = styled.div`
  display: flex;
  border-left: solid thin white;
  height: 100vh;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 700px;
  position: relative;
`;

export const CurrentlyPlayingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrentSong = styled.p`
  margin: 0;
`;
