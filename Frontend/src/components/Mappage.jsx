import React, { useEffect, useRef, useState } from "react";
import Timer from "./Timer";

const Map = ({ markers }) => {
  const mapRef = useRef(null);
  const googleMap = useRef(null);
  const markerInstances = useRef([]);
  const userCircle = useRef(null);

  const [userLocation, setUserLocation] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null); // Stores index of active marker
  const [timers, setTimers] = useState({}); // Store timers per marker

  const [showForm, setShowForm] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [reason, setReason] = useState("");
  const [timerValue, setTimerValue] = useState("");
  const [timerKey, setTimerKey] = useState(0);

  function initializeMap(latitude, longitude) {
    if (!googleMap.current) {
      googleMap.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 17,
      });
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          initializeMap(latitude, longitude);
          updateUserCircle(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location: ", error.message);
          alert("Unable to retrieve your location. Using default location.");
          initializeMap(37.7749, -122.4194);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      initializeMap(37.7749, -122.4194);
    }
  }, []);

  function updateUserCircle(lat, lng) {
    if (!googleMap.current) return;

    if (!userCircle.current) {
      userCircle.current = new window.google.maps.Circle({
        center: { lat, lng },
        radius: 20,
        strokeColor: "blue",
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: "blue",
        fillOpacity: 0.3,
        map: googleMap.current,
      });
    } else {
      userCircle.current.setCenter({ lat, lng });
    }
  }

  useEffect(() => {
    if (googleMap.current && markers) {
      markerInstances.current.forEach((marker) => marker.setMap(null));
      markerInstances.current = [];

      markers.forEach((marker, index) => {
        const newMarker = new window.google.maps.Marker({
          position: marker,
          map: googleMap.current,
          icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        });

        // Add click event to marker
        newMarker.addListener("click", () => {
          if (timers[index]) {
            // Toggle timer visibility when clicking the same marker again
            if (activeMarker === index && showTimer) {
              setShowTimer(false);
              setActiveMarker(null);
            } else {
              setActiveMarker(index);
              setShowForm(false);
              setShowTimer(true);
            }
          } else if (activeMarker === index && showForm) {
            // Clicking the same marker closes the form
            setShowForm(false);
            setActiveMarker(null);
          } else {
            // Open form for new marker
            setActiveMarker(index);
            setShowForm(true);
            setShowTimer(false);
          }
        });

        markerInstances.current.push(newMarker);
      });

      console.log("Number of markers on the map: ", markerInstances.current.length);
    }
  }, [markers, timers, showTimer]);

  const handleOkClick = () => {
    if (!reason.trim() || isNaN(timerValue) || timerValue <= 0) {
      alert("Please enter a valid reason and time (in minutes).");
      return;
    }

    setTimers((prevTimers) => ({
      ...prevTimers,
      [activeMarker]: { reason, time: timerValue },
    }));

    setTimerKey((prev) => prev + 1); // Reset Timer
    setShowForm(false); // Close form after submitting
    setShowTimer(true); // Show timer instead
    setReason("");
    setTimerValue("");
  };

  const handleDeleteTimer = (markerIndex) => {
    setTimers((prevTimers) => {
      const newTimers = { ...prevTimers };
      delete newTimers[markerIndex];
      return newTimers;
    });

    setShowTimer(false);
    setActiveMarker(null); // Allow form to be shown again
  };

  return (
    <div style={{ position: "relative" }}>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }} />

      {/* Show the form when a marker is clicked (if no timer exists) */}
      {showForm && activeMarker !== null && !timers[activeMarker] && (
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "250px",
          }}
        >
          <label>Reason for Parking:</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{ padding: "5px" }}
          />

          <label>Time (minutes):</label>
          <input
            type="number"
            value={timerValue}
            onChange={(e) => setTimerValue(e.target.value)}
            style={{ padding: "5px" }}
          />

          <button
            onClick={handleOkClick}
            style={{
              padding: "10px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            OK
          </button>
        </div>
      )}

      {/* Show the timer when a marker with an active timer is clicked */}
      {showTimer && activeMarker !== null && timers[activeMarker] && (
        <Timer
          key={timerKey}
          reason={timers[activeMarker].reason}
          timerValue={timers[activeMarker].time}
          onRemove={() => handleDeleteTimer(activeMarker)}
        />
      )}
    </div>
  );
};

export default Map;