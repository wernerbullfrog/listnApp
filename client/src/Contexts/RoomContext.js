import React, { createContext, useReducer, useState } from "react";
const initialState = {
  Rooms: null,
};

export const RoomContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "receive-rooms-from-server": {
      return {
        ...state,
        Rooms: action.payload,
      };
    }
  }
};

export const RoomProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [thisRoomType, setThisRoomType] = useState("");
  const [room_Id, setRoom_Id] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const receiveRoomsFromServer = (data) => {
    dispatch({
      type: "receive-rooms-from-server",
      payload: {
        ...data,
      },
    });
  };
  return (
    <RoomContext.Provider
      value={{
        state,
        setToken,
        token,
        thisRoomType,
        setThisRoomType,
        room_Id,
        setRoom_Id,
        actions: {
          receiveRoomsFromServer,
        },
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
