import { useState } from "react";
import "./App.css";
import BillInput from "./components/Billinput";
import NofPeople from "./components/NofPeople";
import TipSelector from "./components/TipSelector";
import TipAmountPerson from "./components/Tipamount";
import TotalPerson from "./components/Total";

function App() {
  const [billAmount, setBillAmount] = useState();
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(0);

  const tipAmountPerPerson = people > 0 ? (billAmount * (tipPercentage / 100)) / people : 0;

  const totalPerPerson = people > 0 ? (billAmount / people) + tipAmountPerPerson : 0;

  const resetAll = () => {
    setBillAmount(0);
    setTipPercentage(0);
    setPeople(1);
  };

  return (
    <>
      <div>
        <h1 className="heading">
          <span className="line1">SPLI</span>
          <span className="line2">TTER</span>
        </h1>
      </div>
      <div className="TipCalculator">
        <BillInput billAmount={billAmount} setBillAmount={setBillAmount} />
        <TipSelector tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
        <NofPeople people={people} setPeople={setPeople} />
      </div>
      <div className="calculate-total">
        <TipAmountPerson tipAmountPerPerson={tipAmountPerPerson} />
        <TotalPerson totalPerPerson={totalPerPerson} />
        <button className="reset" onClick={resetAll}>
          RESET
        </button>
      </div>
    </>
  );
}

export default App;
