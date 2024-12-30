import React, { useState, useEffect } from 'react';
import './CurrentDateTime.css';

const CurrentDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();
  const day = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="datetime-container">
      <h2 className="datetime-heading">Digital Clock</h2> {/* Heading inside */}
      <div className="datetime-card">
        <div className="datetime-day">
          <span>{day}</span>
        </div>
        <div className="datetime-date">{formattedDate}</div>
        <div className="datetime-time">{formattedTime}</div>
      </div>
    </div>
  );
};

export default CurrentDateTime;
