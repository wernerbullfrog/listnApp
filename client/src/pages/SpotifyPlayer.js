import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
function WebPlayback({ token }) {
  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
      play={true}
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
