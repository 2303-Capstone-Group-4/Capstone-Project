import React from 'react';
import { motion } from 'framer-motion';

const MonsterBar = () => {
  return (
    <div id="monster-bar">
      <h3>Enemy Status</h3>
      <img src={'./images/istockphoto-154002685-170667a.jpg'} />
      <h4>Enemy Health</h4>
      {/* do we use store to track progress? */}
    </div>
  );
};

export default MonsterBar;
