// client connect
const activateConn = async (client, colName) => {
  await client.connect();
  console.log("connected");
  const db = client.db();

  const col = await db.collection(colName);
  return col;
};

// client disconnect
const deactivateConn = async (client) => {
  await client.close();
  console.log("disconnected");
};

// response format
const response = (res, code, msg, result) => {
  console.error(msg);
  return res.status(code).json({ status: code, data: result, message: msg });
};

// create a randomly generated string
const generateRandomString = (length) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

module.exports = {
  response,
  activateConn,
  deactivateConn,
  generateRandomString,
};
