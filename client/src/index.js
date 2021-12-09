import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import GlobalStyles from "./GlobalStyles";
import { RoomProvider } from "./Contexts/RoomContext";

ReactDOM.render(
  <RoomProvider>
    <GlobalStyles />
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENTID}
      redirectUri="https://10.0.0.195:3000/"
    >
      <App />
    </Auth0Provider>
  </RoomProvider>,

  document.getElementById("root")
);
