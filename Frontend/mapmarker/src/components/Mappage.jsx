import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null); // Reference to the map container

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Initialize the map with the user's current location
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: latitude, lng: longitude },
            zoom: 15, // Closer zoom level for user location
          });

          // Add a marker at the user's location
          new window.google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: "You are here!",
          });
        },
        (error) => {
          console.error("Error getting location: ", error.message);
          alert("Unable to retrieve your location. Using default location.");

          // Fallback to a default location (e.g., San Francisco)
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 37.7749, lng: -122.4194 }, // Default location
            zoom: 12,
          });
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");

      // Fallback to a default location (e.g., San Francisco)
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default location
        zoom: 12,
      });
    }
  }

  useEffect(() => {
    getLocation(); // Get user location and initialize the map
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      ref={mapRef}
      style={{ width: "60%", height: "500px" }} // Set the map's size
    ></div>
  );
};

export default Map;
