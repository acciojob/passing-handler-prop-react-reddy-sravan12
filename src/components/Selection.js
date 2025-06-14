
import React, { useState } from "react";

const Selection = ({ backgroundColor }) => {
  const [style, setStyle] = useState({ 
    background: "",
    width: "250px",
    height: "250px",
    margin: "20px",
    border: "1px white dotted",
    borderRadius: "5px",
    cursor: "pointer" 
  });

  const handleClick = () => {
    if (backgroundColor && style.background !== backgroundColor) {
      setStyle(prev => ({
        ...prev,
        background: backgroundColor.background
      }));
    }
    
  };


  return (
    <div
      style={style}
      onClick={handleClick}
    >
    </div>
  );
};

export default Selection;