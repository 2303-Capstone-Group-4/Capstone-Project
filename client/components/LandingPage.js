import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h3>This is the LandingPage for Language Knight</h3>
      <Link to="/gameBoard">GameBoard</Link>
    </div>
  );
};

export default LandingPage;
