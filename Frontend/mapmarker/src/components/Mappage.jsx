import React, { useEffect, useRef } from "react";

const Map = ({ markers }) => {
  const mapRef = useRef(null); // Reference to the map container
  const googleMap = useRef(null); // Reference to the Google Map instance
  const markerInstances = useRef([]); // Reference to the marker instances

  function initializeMap(latitude, longitude) {
    // Initialize the map only once
    if (!googleMap.current) {
      googleMap.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      });
    }
  }

  useEffect(() => {
    // Get user location and initialize the map
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          initializeMap(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location: ", error.message);
          alert("Unable to retrieve your location. Using default location.");

          // Fallback to a default location (e.g., San Francisco)
          initializeMap(37.7749, -122.4194);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      initializeMap(37.7749, -122.4194);
    }
  }, []); // Run only once on component mount

  useEffect(() => {
    if (googleMap.current && markers) {
      // Clear existing markers
      markerInstances.current.forEach((marker) => marker.setMap(null));
      markerInstances.current = [];

      // Add new markers
      markers.forEach((marker) => {
        const newMarker = new window.google.maps.Marker({
          position: marker,
          map: googleMap.current,
        });
        markerInstances.current.push(newMarker);
      });
      console.log("Number of markers on the map: ", markerInstances.current.length);
    }
  }, [markers]); // Run whenever the `markers` prop changes

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "500px" }} // Set the map's size
    />
  );
};

export default Map;
