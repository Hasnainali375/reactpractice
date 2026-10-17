import { useState } from "react";
function Bmi() {
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  const [formula, setFormula] = useState(0);
  function calculate(e) {
    e.preventDefault();
    const fiformula = weight / (height * height);
    setFormula(fiformula);
  }
  return (
    <div>
      <div>THIS IS BMI CALCULAR</div>
      <form onSubmit={calculate}>
        <input
          type="number"
          id="height"
          name="height"
          step="any"
          placeholder="enter your height in meter"
          onChange={(e) => setheight(e.target.value)}
        />
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="enter your weight"
          onChange={(e) => setweight(e.target.value)}
        />
        <button>calculate</button>
        <p>your bmi is {formula}</p>
      </form>
    </div>
  );
}
export default Bmi;
