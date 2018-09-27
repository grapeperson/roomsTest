import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
      <Link to="/info" >UserInformation</Link>
      <Link to="/flats">Rooms</Link>
      </nav>
    </header>
  )
}

export default Header;
