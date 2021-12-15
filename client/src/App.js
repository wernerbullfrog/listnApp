import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/ProfilePage";
import Room from "./pages/RoomPage";
import Callback from "./pages/Callback";

const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/callback/" element={<Callback code={code} />} />
        <Route path="/:roomType/:_id" element={<Room code={code} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
