import React from 'react';
import './Homepage.css';
import TextLinkExample from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const Homepage = () => {
  return (
    <>
    <TextLinkExample/>

    <div classname='header1'>
      <h1 id='topheader'>Worrying about your car in parking?</h1>
      <p>Say no more!</p>
      <p> Track your car as you go along!</p>
    </div>
    </>
  );
};

export default Homepage;
