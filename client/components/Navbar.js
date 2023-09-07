import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/gameBoard">GameBoard</Link>
      </div>
    </nav>
);

export default Navbar;
