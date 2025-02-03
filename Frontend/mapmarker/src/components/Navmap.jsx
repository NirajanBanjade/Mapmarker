import React, { useState, useEffect } from 'react';
import Map from './Mappage';

const Navmap = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [markers, setMarkers] = useState([]); 
  const [mark,setMark]=useState(0);

  function updatemarker() {
    console.log("Mark Location button clicked");
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
  
          // Check if a marker already exists at this location
          const isDuplicate = markers.some(
            (marker) => marker.lat === latitude && marker.lng === longitude
          );
  
          if (!isDuplicate) {
            setMarkers((prevMarkers) => [
              ...prevMarkers,
              { lat: latitude, lng: longitude },
            ]);
  
            setMark((prevMark) => prevMark + 1);
  
            console.log("New Marker Added at:", latitude, longitude);
          } else {
            console.log("Marker already exists at this location:", latitude, longitude);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }
  
  
  function clear(){
    setMark(0);
  }

  function start(){
    
  }


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
              <button className="btn btn-primary" onClick={updatemarker}>
                {/* <i className="bi bi-geo-alt me-2"></i> */}
                Mark Location
              </button>
              <button className="btn btn-secondary" onClick={clear}>
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
                  <Map markers={markers}/>
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
                <p className="h2" >{mark}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navmap;