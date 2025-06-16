
import React, { useState } from "react";
import '../styles/Child.css'

const Selection = ({ backgroundColor }) => {
  const [style, setStyle] = useState({ 
    background: "",
   
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
      className="fix-box"
    >
    </div>
  );
};

export default Selection;