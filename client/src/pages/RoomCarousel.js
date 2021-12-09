import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { CarouselContainer } from "../ComponentStylings/CardStylings";
import { LinearProgress } from "@mui/material";
const RoomCarousel = ({ Rooms }) => {
  const [displayedRooms, setDisplayedRooms] = useState([]);

  useEffect(() => {
    if (Rooms) {
      console.log("Rooms:", Rooms);
      if (Rooms.rooms) {
        setDisplayedRooms(Rooms.rooms);
      } else {
        let allRooms = Rooms.publicRooms.concat(Rooms.privateRooms);
        setDisplayedRooms(allRooms);
      }
    }
  }, [Rooms]);

  console.log(displayedRooms);

  return Rooms ? (
    <CarouselContainer>
      {displayedRooms.map((room) => (
        <RoomCard key={Math.random() * 460000000} room={room} />
      ))}
    </CarouselContainer>
  ) : (
    <LinearProgress></LinearProgress>
  );
};

export default RoomCarousel;
