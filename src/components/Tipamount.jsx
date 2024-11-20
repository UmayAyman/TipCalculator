import React from 'react';
import "./Tipamount.css";

function TipAmountPerson({ tipAmountPerPerson }) {
    const tip = tipAmountPerPerson || 0;
    return (
        <div className="tip-amount-person">
        <label htmlFor="tip-amount">Tip Amount /person</label>
        <p id="tip-amount" className="amount">
        ${tip.toFixed(2)}
        </p>
        </div>
    );
}

export default TipAmountPerson;
