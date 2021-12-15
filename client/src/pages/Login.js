import React from "react";

const Login = () => {
  // const [setDataState] = useState("");
  // const handleClick = () => {
  //   fetch("/auth/login", {
  //     headers: {
  //       "Access-Control-Allow-Origin":
  //         "https://accounts.spotify.com/authorize/?",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDataState(data.result);
  //     });
  // };

  return (
    <div>
      <a href="http://localhost:8000/auth/login">Login with Spotify</a>
    </div>
  );
};

export default Login;
