require("dotenv").config();
const request = require("request");
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
const { generateRandomString } = require("./utils");
const redirect_uri = "http://localhost:3000/callback";
////////////////////////////////////////////////////////////////////////
// ************ request spotify to redirect to  login ***************//
//////////////////////////////////////////////////////////////////////
const requestUserAuth = (req, res) => {
  const scope =
    " streaming  user-read-email  user-read-private \
    user-library-read \
    user-library-modify \
    user-read-playback-state \
    user-modify-playback-state";

  const state = generateRandomString(16);
  const auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: SPOTIFY_CLIENT_ID,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state,
  });
  res.redirect(
    `https://accounts.spotify.com/authorize/?${auth_query_parameters.toString()}`
  );
};
////////////////////////////////////////////////////////////////////////
// ******* Request the access token once spotify has approved  ******//
//////////////////////////////////////////////////////////////////////
const requestAccessToken = (req, res) => {
  var code = req.params.code;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString(
          "base64"
        ),
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    json: true,
  };
  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.json({
        access_token: access_token,
      });
    } else {
    }
  });
};

const returnAccessToken = (req, res) => {};

module.exports = {
  requestAccessToken,
  requestUserAuth,
  returnAccessToken,
};
