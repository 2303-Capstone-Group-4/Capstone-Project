import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>Language Knight</h1>
    <nav>
      <div>
        <Link to="/home">Home</Link>
        <a href="#">Logout</a>
      </div>
    </nav>
    <hr />
  </div>
);

export default Navbar;
