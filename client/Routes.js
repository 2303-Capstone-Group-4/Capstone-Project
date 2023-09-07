import React, { Component, Fragment } from 'react';
import { withRouter, Route, Routes, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="home"
          element={<LandingPage />}
        />
        <Route
          path="game"
          element={<GamePage />}
        />
      </Routes>
    </div>
  );
};

export default Router;
