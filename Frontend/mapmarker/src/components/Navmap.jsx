import React, { useState, useEffect } from 'react';
import Map from './Mappage';

const Navmap = () => {
  const [isTracking, setIsTracking] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Location Tracker</a>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-gear"></i>
          </button>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          {/* Control Buttons */}
          <div className="col-12 mb-4">
            <div className="btn-group">
              <button 
                className={`btn ${isTracking ? 'btn-danger' : 'btn-success'}`}
                onClick={() => setIsTracking(!isTracking)}
              >
                <i className={`bi ${isTracking ? 'bi-stop-circle' : 'bi-play-circle'} me-2`}></i>
                {isTracking ? 'Stop' : 'Start'}
              </button>
              <button className="btn btn-primary">
                <i className="bi bi-geo-alt me-2"></i>
                Mark Location
              </button>
              <button className="btn btn-secondary">
                <i className="bi bi-trash me-2"></i>
                Clear
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <div style={{ width: "100%", height: '500px', backgroundColor: '#f8f9fa' }} className="rounded">
                  <Map/>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="col-md-4 mt-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-speedometer2 fs-1 text-primary mb-2"></i>
                <h5 className="card-title">Distance</h5>
                <p className="h2">0.0 km</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-clock fs-1 text-primary mb-2"></i>
                <h5 className="card-title">Duration</h5>
                <p className="h2">00:00:00</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-geo fs-1 text-primary mb-2"></i>
                <h5 className="card-title">Markers</h5>
                <p className="h2">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navmap;