import React, { useEffect, useState } from "react";

const Timer = ({ reason, timerValue, onRemove }) => {
  const [timeLeft, setTimeLeft] = useState(timerValue * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onRemove();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onRemove();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onRemove]);

  return (
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        zIndex: 1000,
      }}
    >
      <p><strong>Reason:</strong> {reason}</p>
      <p><strong>Time Left:</strong> {Math.floor(timeLeft / 60)} min {timeLeft % 60} sec</p>
      <button
        onClick={onRemove}
        style={{
          padding: "5px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "5px",
        }}
      >
        Delete Timer
      </button>
    </div>
  );
};

export default Timer;
