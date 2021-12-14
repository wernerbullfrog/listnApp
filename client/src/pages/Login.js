import React, { useState } from "react";

const Login = () => {
  const [setDataState] = useState("");
  const handleClick = () => {
    fetch("/auth/login", {
      headers: {
        "Access-Control-Allow-Origin":
          "https://accounts.spotify.com/authorize/?",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataState(data.result);
      });
  };

  return (
    <div>
      <header>
        <a href="http://localhost:8000/auth/login">Login with Spotify</a>
        <button onClick={() => handleClick()}>Login with Spotify</button>
      </header>
    </div>
  );
};

export default Login;
