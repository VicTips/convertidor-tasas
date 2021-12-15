import "./App.css";
import { useState } from "react";
import logo from "../src/images/logo.png";

function App() {
  const [number, setNumber] = useState("");
  const [tIngresada, setTIngresada] = useState("");
  const [tSalida, setTSalida] = useState("");
  let tasaEA = "";
  let resultado = "";

  if (number !== "") {
    if (tIngresada === "Mensual") {
      tasaEA = ((1 + number / 100) ** 12 - 1) * 100;
    } else if (tIngresada === "Diaria (365)") {
      tasaEA = ((1 + number / 100) ** 365 - 1) * 100;
    } else if (tIngresada === "Diaria (360)") {
      tasaEA = ((1 + number / 100) ** 360 - 1) * 100;
    } else if (tIngresada === "Bimestral") {
      tasaEA = ((1 + number / 100) ** 6 - 1) * 100;
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
    } else if (tSalida === "Diaria (365)") {
      resultado = ((1 + tasaEA / 100) ** (1 / 365) - 1) * 100;
    } else if (tSalida === "Diaria (360)") {
      resultado = ((1 + tasaEA / 100) ** (1 / 360) - 1) * 100;
    } else if (tSalida === "Bimestral") {
      resultado = ((1 + tasaEA / 100) ** (1 / 6) - 1) * 100;
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
    <div className="d-flex justify-content-center screen-full">
      <div className="bg-light p-5 d-flex flex-column my-auto shadow">
        <img src={logo} alt="Logo VicTips" className="mb-3" />
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
          defaultValue={1}
          onChange={(e) => setTIngresada(e.target.value)}
          className="form-select mb-3"
        >
          <option disabled hidden value={1}>
            Seleccione
          </option>
          <option>Diaria (365)</option>
          <option>Diaria (360)</option>
          <option>Mensual</option>
          <option>Bimestral</option>
          <option>Trimestral</option>
          <option>Semestral</option>
          <option>Anual</option>
        </select>

        <span>Tipo de tasa deseada</span>
        <select
          defaultValue={1}
          onChange={(e) => setTSalida(e.target.value)}
          className="form-select mb-3"
        >
          <option disabled hidden value={1}>
            Seleccione 
          </option>
          <option>Diaria (365)</option>
          <option>Diaria (360)</option>
          <option>Mensual</option>
          <option>Bimestral</option>
          <option>Trimestral</option>
          <option>Semestral</option>
          <option>Anual</option>
        </select>

        <h5 className="text-center">
          <span>{resultado}</span>
          {resultado !== "" ? "%" : "0.0%"}
        </h5>
      </div>
    </div>
  );
}

export default App;
