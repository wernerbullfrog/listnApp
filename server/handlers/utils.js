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
  return res.status(code).json({ status: code, data: result, message: msg });
};

module.exports = {
  response,
  activateConn,
  deactivateConn,
};
