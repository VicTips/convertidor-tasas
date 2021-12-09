import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const resultado =
    number !== "" ? ((1 + parseFloat(number) / 100) ** 12 - 1) * 100 : "";

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="d-flex flex-column">
        <span>Ingrese la tasa de interés</span>
        <div className="d-flex align-items-center">
          <input
            required
            placeholder="2.5"
            className="text-center"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          ></input>
          <span>%</span>
        </div>
        <span>Seleccione el tipo de tasa ingresada</span>
        <select>
          <option>Mensual</option>
          <option>Trimestral</option>
          <option>Semestral</option>
          <option>Anual</option>
        </select>
        <span>Seleccione el tipo de tasa deseada</span>
        <select>
          <option>Mensual</option>
          <option>Trimestral</option>
          <option>Semestral</option>
          <option>Anual</option>
        </select>
        <span>Resultado:</span>
        {/* <input disabled value={resultado}></input> */}
        <div className="d-flex">
          <span>{resultado}</span>
          {number !== "" ? "%" : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
