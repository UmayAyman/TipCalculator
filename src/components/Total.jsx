import React from "react";
import "./Total.css";

function TotalPerson({totalPerPerson}) {
    const Total = totalPerPerson || 0;
    return (
        <div className="total-person">
        <label htmlFor="total-amount">Total   /person</label>
        <p id = "total-amount" className="amount">
        ${Total.toFixed(2)}
        </p>
        </div>
    );
}

export default TotalPerson;
