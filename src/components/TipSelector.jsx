import React from "react";
import "./TipSelector.css";

const TipSelector = ({ tipPercentage, setTipPercentage }) => {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="tip-selector">
      <label>Select Tip %</label>
      <div className="tip-buttons">
        {tipOptions.map((tip) => (
          <button
            key={tip}
            onClick={() => setTipPercentage(tip)}
            className={tipPercentage === tip ? "selected" : ""}
          >
            {tip}%
          </button>
        ))}
        <input
          className="custom-button"
          type="number"
          placeholder="Custom"
          onChange={(e) => setTipPercentage(parseFloat(e.target.value) || 0)}
          min="0"
        />
      </div>
    </div>
  );
};

export default TipSelector;
