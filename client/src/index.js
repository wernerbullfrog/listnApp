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
      redirectUri="http://localhost:3000/callback"
      audience="https://dev-cfn37ewf.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
      useRefreshTokens={true}
    >
      <App />
    </Auth0Provider>
  </RoomProvider>,

  document.getElementById("root")
);
