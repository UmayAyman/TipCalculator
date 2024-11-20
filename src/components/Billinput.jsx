import React from 'react';
import "./Billinput.css";

const BillInput = ({ billAmount, setBillAmount }) => {
    return (
        <div className="bill-input">
            <label>Bill</label>
            <div className="input-wrapper">
                <span className="dollar-sign">$</span>
                <input
                    className="bill-input-field"
                    type="number"
                    value={billAmount}
                    onChange={(e) => setBillAmount(parseFloat(e.target.value) || 0 )}
                    min="0"
                />
            </div>
        </div>
    );
};

export default BillInput;
