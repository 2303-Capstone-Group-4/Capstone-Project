import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Routes from './Routes';
import Navbar from './components/Navbar';
import GameBoard from './components/GameBoard';
import LandingPage from './components/LandingPage';
import WrongPage from './components/WrongPage';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* something wrong with the Routes section */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/GameBoard" element={<GameBoard />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
    </div>
  );
};

export default App;
