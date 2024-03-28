import React, { useState, useEffect } from "react";
import "./TextSlider.css"; // Import CSS file for styling

const TextRoll = () => {
  const [position, setPosition] = useState(0);
  const textRef = React.createRef();

  useEffect(() => {
    const textWidth = textRef.current.clientWidth;
    const containerWidth = textRef.current.parentElement.clientWidth;

    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition === -textWidth) {
          return containerWidth;
        } else {
          return prevPosition - 1;
        }
      });
    }, 10); // Adjust roll speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-roll-container">
      <div
        className="text-roll"
        style={{ transform: `translateX(${position}px)` }}
        ref={textRef}
      >
        Rolling Text Here fvv 3t344t t43t 3 34y4t34ttaet 34t34t 34t 24t t23t23
        2t 32t23t 23 tt23t 23t 4t 3wr 12r 23t 23323t 23 t2t23 t23t 23t 23 tw3t
        t32t 3qt q3t
      </div>
    </div>
  );
};

export default TextRoll;
