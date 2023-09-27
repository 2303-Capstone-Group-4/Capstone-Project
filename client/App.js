import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GameBoard from './components/GameBoard';
import LandingPage from './components/LandingPage';
import WrongPage from './components/WrongPage';
import Tier1Info from './components/Tier1Info';
import Tier2Info from './components/Tier2Info';
import Tier3Info from './components/Tier3Info';
import VictoryPage from './components/VictoryPage';

const App = () => {
  return (
    <div id="content">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/GameBoard"
          element={<GameBoard />}
        />
        <Route
          path="*"
          element={<WrongPage />}
        />
        <Route
          path="/Tier1Info"
          element={<Tier1Info />}
        />
        <Route
          path="/Tier2Info"
          element={<Tier2Info />}
        />
        <Route
          path="/Tier3Info"
          element={<Tier3Info />}
        />
        <Route
          path="/Victory"
          element={<VictoryPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
