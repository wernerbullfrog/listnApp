import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  margin: 10px;
  border-top: solid thin grey;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const AlbumImg = styled.img`
  height: 40px;
  width: 40px;
  margin: 10px;
`;

export const SearchResultContainer = styled.div`
  overflow: scroll;
  height: 300px;
  width: 700px;
`;

export const TitleNameWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Artist = styled.div`
  color: grey;
  font-size: medium;
`;
