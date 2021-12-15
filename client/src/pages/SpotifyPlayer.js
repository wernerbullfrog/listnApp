import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

function WebPlayback({ token, trackUri }) {
  const [play, setPlay] = useState(false);
  useEffect(() => setPlay(true), [trackUri]);
  if (!token) return null;
  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      uris={trackUri ? trackUri : []}
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      styles={{
        activeColor: "#fff",
        bgColor: "transparant",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "rgb(222, 125, 241)",
        sliderHandleColor: "rgb(222, 125, 241)",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: "100px",
        sliderTrackBorderRadius: "100px",
      }}
    />
  );
}

export default WebPlayback;
