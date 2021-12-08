import React, { createContext, useReducer } from "react";
const initialState = {
  Rooms: null,
};

export const RoomContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "receive-rooms-from-server": {
      console.log("action: ", action.payload.rooms);
      return {
        ...state,
        Rooms: action.payload,
      };
    }
  }
};

export const RoomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const receiveRoomsFromServer = (data) => {
    dispatch({
      type: "receive-rooms-from-server",
      payload: {
        ...data,
      },
    });
    console.log("dispatch data: ", data);
  };

  return (
    <RoomContext.Provider
      value={{
        state,
        actions: {
          receiveRoomsFromServer,
        },
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
