import React from "react";
import personIcon from "../assets/icon-person.svg";
import "./NofPeople.css";

const NofPeople = ({ people, setPeople }) => {
    return (
        <div className="people">
            <label>Number of People</label>
            <div className="input-container">
                <img src={personIcon} alt="person icon" className="input-icon" />
                <input
                    className="people-input-field"
                    type="number"
                    placeholder="0"
                    value={people}
                    onChange={(e) => setPeople(parseFloat(e.target.value) || 0)}
                    min = "0"    //to prevent negative
                />
            </div>
        </div>
    );
};

export default NofPeople;