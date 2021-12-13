import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [tIngresada, setTIngresada] = useState("");
  const [tSalida, setTSalida] = useState("");
  let tasaEA = "";
  let resultado = "";

  if (number !== "") {
    if (tIngresada === "Mensual") {
      tasaEA = ((1 + number / 100) ** 12 - 1) * 100;
    } else if (tIngresada === "Trimestral") {
      tasaEA = ((1 + number / 100) ** 4 - 1) * 100;
    } else if (tIngresada === "Semestral") {
      tasaEA = ((1 + number / 100) ** 2 - 1) * 100;
    } else if (tIngresada === "Anual") {
      tasaEA = number;
    }
  }

  if (number !== "" && tasaEA !== "") {
    if (tSalida === "Mensual") {
      resultado = ((1 + tasaEA / 100) ** (1 / 12) - 1) * 100;
    } else if (tSalida === "Trimestral") {
      resultado = ((1 + tasaEA / 100) ** (1 / 4) - 1) * 100;
    } else if (tSalida === "Semestral") {
      resultado = ((1 + tasaEA / 100) ** (1 / 2) - 1) * 100;
    } else if (tSalida === "Anual") {
      resultado = tasaEA;
    }
  }

  if (tIngresada === tSalida && tIngresada !== "") {
    resultado = number;
  }

  return (
    <div className="d-flex justify-content-center mt-5 specialfont">
      <div className="d-flex flex-column">
        <span>Ingrese la tasa de interés</span>
        <div className="input-group mb-3">
          <input
            required
            placeholder="2.5"
            className="text-center form-control"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          ></input>
          <span className="input-group-text">%</span>
        </div>

        <span>Tipo de tasa ingresada</span>
        <select
          onChange={(e) => setTIngresada(e.target.value)}
          className="form-select mb-3"
        >
          <option disabled selected>
            Seleccione
          </option>
          <option>Mensual</option>
          <option>Trimestral</option>
          <option>Semestral</option>
          <option>Anual</option>
        </select>

        <span>Tipo de tasa deseada</span>
        <select
          onChange={(e) => setTSalida(e.target.value)}
          className="form-select mb-3"
        >
          <option disabled selected>
            Seleccione
          </option>
          <option>Mensual</option>
          <option>Trimestral</option>
          <option>Semestral</option>
          <option>Anual</option>
        </select>

        <h5 className="text-center">
          <span>{resultado}</span>
          {resultado !== "" ? "%" : ""}
        </h5>
      </div>
    </div>
  );
}

export default App;
