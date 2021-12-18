import "./App.css";
import { useState } from "react";
import logo from "../src/images/logo.png";

function App() {
  const [tasa, setTasa] = useState("");
  const [tIngresada, setTIngresada] = useState("");
  const [tSalida, setTSalida] = useState("");
  const DIA365 = "Diaria (365)";
  const DIA360 = "Diaria (360)";
  const MES = "Mensual";
  const BIMESTRE = "Bimestral";
  const TRIMESTRE = "Trimestral";
  const SEMESTRE = "Semestral";
  const ANUAL = "Anual";
  const tiposTasas = [
    DIA365,
    DIA360,
    MES,
    BIMESTRE,
    TRIMESTRE,
    SEMESTRE,
    ANUAL,
  ];
  let tasaEA = "";
  let resultado = "";

  if (tasa !== "") {
    if (tIngresada === MES) {
      tasaEA = ((1 + tasa / 100) ** 12 - 1) * 100;
    } else if (tIngresada === DIA365) {
      tasaEA = ((1 + tasa / 100) ** 365 - 1) * 100;
    } else if (tIngresada === DIA360) {
      tasaEA = ((1 + tasa / 100) ** 360 - 1) * 100;
    } else if (tIngresada === BIMESTRE) {
      tasaEA = ((1 + tasa / 100) ** 6 - 1) * 100;
    } else if (tIngresada === TRIMESTRE) {
      tasaEA = ((1 + tasa / 100) ** 4 - 1) * 100;
    } else if (tIngresada === SEMESTRE) {
      tasaEA = ((1 + tasa / 100) ** 2 - 1) * 100;
    } else if (tIngresada === ANUAL) {
      tasaEA = tasa;
    }
  }

  if (tasa !== "" && tasaEA !== "") {
    if (tSalida === MES) {
      resultado = ((1 + tasaEA / 100) ** (1 / 12) - 1) * 100;
    } else if (tSalida === DIA365) {
      resultado = ((1 + tasaEA / 100) ** (1 / 365) - 1) * 100;
    } else if (tSalida === DIA360) {
      resultado = ((1 + tasaEA / 100) ** (1 / 360) - 1) * 100;
    } else if (tSalida === BIMESTRE) {
      resultado = ((1 + tasaEA / 100) ** (1 / 6) - 1) * 100;
    } else if (tSalida === TRIMESTRE) {
      resultado = ((1 + tasaEA / 100) ** (1 / 4) - 1) * 100;
    } else if (tSalida === SEMESTRE) {
      resultado = ((1 + tasaEA / 100) ** (1 / 2) - 1) * 100;
    } else if (tSalida === ANUAL) {
      resultado = tasaEA;
    }
  }

  if (tIngresada === tSalida && tIngresada !== "") {
    resultado = tasa;
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
            onChange={(e) => setTasa(e.target.value)}
            value={tasa}
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
          {tiposTasas.map((tipo, indx) => (
            <option key={indx}>{tipo}</option>
          ))}
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
          {tiposTasas.map((tipo, indx) => (
            <option key={indx}>{tipo}</option>
          ))}
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
