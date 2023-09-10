import React from 'react';
import { Link } from 'react-router-dom';

const WrongPage = () => (
    <div>
        <p>Sorry, there is nothing here</p>
        <Link to="/">Home</Link>
    </div>
);

export default WrongPage;
