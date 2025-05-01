import React, { useState, useEffect } from 'react';

function Facts() {
  const targets = [1234, 1234, 1234, 1234];
  const duration = 4500;
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const newCounts = targets.map((target) =>
        Math.min(Math.floor((progress / duration) * target), target)
      );
      setCounts(newCounts);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, []);

  return (
    <div
      className="container-fluid facts my-5 py-5"
      style={{
        position: 'relative',
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: '#0F4229',
          zIndex: 2,
        }}
      />

      {/* Content above overlay */}
      <div className="container py-5" style={{ position: 'relative', zIndex: 3 }}>
        <div className="row g-5">
          {counts.map((count, index) => (
            <div key={index} className="col-sm-6 col-lg-3 text-center">
              <h1 className="display-4 text-white">{count}</h1>
              <span className="fs-5 fw-semibold text-light">
                {index === 0 && 'Happy Clients'}
                {index === 1 && 'Garden Completed'}
                {index === 2 && 'Dedicated Staff'}
                {index === 3 && 'Awards Achieved'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facts;
