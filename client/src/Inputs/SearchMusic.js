import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

import { SearchResultContainer } from "../ComponentStylings/InputStylings";
import { SongSearchInput } from "../ComponentStylings/FormStylings";
import TrackSearchResult from "./TrackSearchResult";
const SpotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

const SearchMusic = ({
  token,
  searchSongs,
  setsearchSongs,
  searchResults,
  setSearchResults,
  chooseTrack,
}) => {
  // set the spotify access token
  useEffect(() => {
    if (!token) return;
    SpotifyApi.setAccessToken(token);
  }, [token]);
  // this function allows to search for songs and display the possible options
  useEffect(() => {
    if (!searchSongs) return setSearchResults([]);
    if (!token) return;
    let cancel = false;
    SpotifyApi.searchTracks(searchSongs).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [searchSongs, token]);

  return (
    <div>
      <SongSearchInput
        type="search"
        placeholder="Search for Songs or Artist "
        value={searchSongs}
        onChange={(e) => {
          setsearchSongs(e.target.value);
        }}
      />

      <SearchResultContainer>
        {searchResults.map((track) => (
          <TrackSearchResult
            chooseTrack={chooseTrack}
            track={track}
            key={track.uri}
          />
        ))}
      </SearchResultContainer>
    </div>
  );
};

export default SearchMusic;
