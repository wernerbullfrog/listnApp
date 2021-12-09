import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/ProfilePage";
import Room from "./pages/RoomPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:roomType/:_id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
