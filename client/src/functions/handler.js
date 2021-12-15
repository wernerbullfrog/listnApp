export const handleSubmit = (e, formData, roomType) => {
  e.preventDefault();
  fetch(`/api/${roomType}`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      const { status, error } = json;
      console.log("status: ", status, "Error:", error);
    })
    .catch(console.log("error has occured"));
};

export const getToken = async (token, setToken) => {
  const response = await fetch("http://localhost:8000/auth/token");
  const json = await response.json();
  setToken(json.access_token);
  console.log(token);
};

export const getUserMetadata = async (
  getAccessTokenSilently,
  user,
  setUserMetadata,
  setToken
) => {
  const domain = "dev-cfn37ewf.us.auth0.com";
  try {
    const accessToken = await getAccessTokenSilently({
      audience: `https://${domain}/api/v2/`,
      scope: "read:current_user",
    });
    const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
    const metadataResponse = await fetch(userDetailsByIdUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { user_metadata } = await metadataResponse.json();
    setUserMetadata(user_metadata);
    setToken(accessToken);
  } catch (e) {
    console.log(e.message);
  }
};
