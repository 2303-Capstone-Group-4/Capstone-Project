import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div id="navbar">
      <h1 style={{ textAlign: 'center' }}>Language Knight</h1>
      <Link to="/">Home</Link>
    </div>
  </nav>
);

export default Navbar;
