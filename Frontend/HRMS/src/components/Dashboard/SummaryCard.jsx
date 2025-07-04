import React from "react";
import "../styles/SummaryCard.css";

const SummaryCard = ({ icon, text, number, color }) => {
  return (
    <div className="parent">
      <div className="div1" style={{ backgroundColor: `${color}` }}>
        {icon}
      </div>

      <div className="parent2">
        <div className="div2">
          {text}
        </div>
        <div className="div3">
          {number}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
