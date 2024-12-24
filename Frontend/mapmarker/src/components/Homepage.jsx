import React from 'react';
import './Homepage.css';
import './Image.css';
import TextLinkExample from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import parkingLotImage from '../pictures/parking-lot.png';

const Homepage = () => {
  return (
    <>
      <TextLinkExample />
      <div className="header1">
        <h1 id="topheader">Worrying about your car in parking?</h1>
        <p className='header-text' >Say no more!</p>
        <p className='header-text'>Track your car as you go along!</p>
      </div>
      <div>
        <img src={parkingLotImage} alt="Parking Lot"/>
      </div>
    </>
  );
};

export default Homepage;
