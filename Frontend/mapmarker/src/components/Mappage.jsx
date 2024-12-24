import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null); // Reference to the map container

  useEffect(() => {
    // Initialize the map after the component mounts
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
      zoom: 12, // Initial zoom level
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "500px" }} // Set the map's size
    ></div>
  );
};

export default Map;
