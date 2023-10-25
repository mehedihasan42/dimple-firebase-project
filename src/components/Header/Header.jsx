import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/form'>Form-RBS</Link>
        </div>
    );
};

export default Header;