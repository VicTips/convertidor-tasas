import "./App.css";
import { useState } from "react";
import { Logo } from "./components/Logo";
import NumberFormat from "react-number-format";
import opcionesTasas from "./services/Options";

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
  const ANUAL = "Efectiva anual";
  const NDIA365 = "Nominal diaria (365)";
  const NDIA360 = "Nominal diaria (360)";
  const NMES = "Nominal mensual";
  const NBIMESTRE = "Nominal bimestral";
  const NTRIMESTRE = "Nominal trimestral";
  const NSEMESTRE = "Nominal semestral";
  const tiposTasas = [
    DIA365,
    DIA360,
    MES,
    BIMESTRE,
    TRIMESTRE,
    SEMESTRE,
    ANUAL,
    NDIA365,
    NDIA360,
    NMES,
    NBIMESTRE,
    NTRIMESTRE,
    NSEMESTRE,
  ];

  let tasaEA = "";
  let resultado = "";

  if (tasa !== "" && !isNaN(tasa)) {
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
    } else if (tIngresada === NMES) {
      tasaEA = ((1 + tasa / 12 / 100) ** 12 - 1) * 100;
    } else if (tIngresada === NDIA365) {
      tasaEA = ((1 + tasa / 365 / 100) ** 365 - 1) * 100;
    } else if (tIngresada === NDIA360) {
      tasaEA = ((1 + tasa / 360 / 100) ** 360 - 1) * 100;
    } else if (tIngresada === NBIMESTRE) {
      tasaEA = ((1 + tasa / 6 / 100) ** 6 - 1) * 100;
    } else if (tIngresada === NTRIMESTRE) {
      tasaEA = ((1 + tasa / 4 / 100) ** 4 - 1) * 100;
    } else if (tIngresada === NSEMESTRE) {
      tasaEA = ((1 + tasa / 2 / 100) ** 2 - 1) * 100;
    }
  }

  if (tasa !== "" && tasaEA !== "") {
    if (tSalida === MES) {
      resultado = (1 + tasaEA / 100) ** (1 / 12) - 1;
    } else if (tSalida === DIA365) {
      resultado = (1 + tasaEA / 100) ** (1 / 365) - 1;
    } else if (tSalida === DIA360) {
      resultado = (1 + tasaEA / 100) ** (1 / 360) - 1;
    } else if (tSalida === BIMESTRE) {
      resultado = (1 + tasaEA / 100) ** (1 / 6) - 1;
    } else if (tSalida === TRIMESTRE) {
      resultado = (1 + tasaEA / 100) ** (1 / 4) - 1;
    } else if (tSalida === SEMESTRE) {
      resultado = (1 + tasaEA / 100) ** (1 / 2) - 1;
    } else if (tSalida === ANUAL) {
      resultado = tasaEA / 100;
    } else if (tSalida === NMES) {
      resultado = ((1 + tasaEA / 100) ** (1 / 12) - 1) * 12;
    } else if (tSalida === NDIA365) {
      resultado = ((1 + tasaEA / 100) ** (1 / 365) - 1) * 365;
    } else if (tSalida === NDIA360) {
      resultado = ((1 + tasaEA / 100) ** (1 / 360) - 1) * 360;
    } else if (tSalida === NBIMESTRE) {
      resultado = ((1 + tasaEA / 100) ** (1 / 6) - 1) * 6;
    } else if (tSalida === NTRIMESTRE) {
      resultado = ((1 + tasaEA / 100) ** (1 / 4) - 1) * 4;
    } else if (tSalida === NSEMESTRE) {
      resultado = ((1 + tasaEA / 100) ** (1 / 2) - 1) * 2;
    }
  }

  if (tIngresada === tSalida && tIngresada !== "" && !isNaN(tasa)) {
    resultado = tasa / 100;
  }

  const DECIMALS = 14;
  let formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumSignificantDigits: DECIMALS,
    maximumSignificantDigits: DECIMALS,
  });

  return (
    <div className="d-flex justify-content-center screen-full">
      <div className="bg-light p-5 d-flex flex-column my-auto shadow">
        <Logo />
        <span className="mt-3">Ingrese la tasa de interés</span>
        <NumberFormat
          placeholder="1.8%"
          displayType="input"
          type="text"
          className="text-center form-control mb-3"
          thousandSeparator={true}
          allowNegative={false}
          isNumericString={true}
          suffix="%"
          onChange={(e) => setTasa(parseFloat(e.target.value))}
          value={tasa}
        />

        <span>Tipo de tasa ingresada</span>
        <select
          aria-label="tIngresada"
          name="tIngresada"
          defaultValue={1}
          onChange={(e) => setTIngresada(e.target.value)}
          className="form-select mb-3 text-center"
        >
          {opcionesTasas(tiposTasas)}
        </select>

        <span>Tipo de tasa deseada</span>
        <select
          aria-label="tSalida"
          name="tSalida"
          defaultValue={1}
          onChange={(e) => setTSalida(e.target.value)}
          className="form-select mb-3 text-center"
        >
          {opcionesTasas(tiposTasas)}
        </select>

        <h5 className="text-center">
          {resultado !== "" ? formatter.format(resultado) : "0.0%"}
        </h5>
      </div>
    </div>
  );
}

export default App;
