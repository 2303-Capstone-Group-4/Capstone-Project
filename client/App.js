import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Routes from './Routes';
import Navbar from './components/Navbar';
import GamePage from './components/GamePage';
import LandingPage from './components/LandingPage';
import WrongPage from './components/WrongPage';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* something wrong with the Routes section */}

      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
    </div>
  );
};

export default App;
