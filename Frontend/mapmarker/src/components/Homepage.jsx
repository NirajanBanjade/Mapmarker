import React from 'react';
import './Homepage.css';
import './Image.css';
import TextLinkExample from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import parkingLotImage from '../pictures/parking-lot.png';

const Homepage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      {/* <TextLinkExample /> */}

      {/* Header/Hero Section */}
      <header className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">Worrying about your car in parking?</h1>
              <p className="lead">Say no more!</p>
              <p className="lead mb-4">Track your car as you go along!</p>
              <button className="btn btn-light btn-lg">Get Started</button>
            </div>
            <div className="col-lg-6">
              <img
                src={parkingLotImage}
                alt="Parking Lot"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-geo-alt fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">Real-time Tracking</h5>
                  <p className="card-text">Know exactly where your car is at all times with our advanced tracking system.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">Secure Parking</h5>
                  <p className="card-text">Rest easy knowing your car is protected with our security features.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-phone fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">Mobile App</h5>
                  <p className="card-text">Control everything from our easy-to-use mobile application.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h3>Ready to get started?</h3>
          <p className="lead mb-4">Join thousands of satisfied users today!</p>
          {/* <button className="btn btn-primary btn-lg">Sign Up Now</button> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>We provide innovative parking solutions to make your life easier.</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">Features</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: info@parkingtracker.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Parking Street</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="mb-0">&copy; 2024 Parking Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
