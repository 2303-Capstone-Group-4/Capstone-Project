import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Routes from './Routes';
import Navbar from "./components/Navbar";
import GameBoard from "./components/GameBoard";
import LandingPage from "./components/LandingPage";
import WrongPage from "./components/WrongPage";
import Tier1Info from "./components/Tier1Info";

const App = () => {
  return (
    <div id="content">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/GameBoard" element={<GameBoard />} />
        <Route path="*" element={<WrongPage />} />
        <Route path="/Tier1Info" element={<Tier1Info />} />
      </Routes>
    </div>
  );
};

export default App;
