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
      tasaEA = (((1+number/100)**12)-1)*100
    } else if (tIngresada === "Trimestral") {
      tasaEA = (((1+number/100)**4)-1)*100
    } else if (tIngresada === "Semestral") {
      tasaEA = (((1+number/100)**2)-1)*100
    } else if (tIngresada === "Anual") {
      tasaEA = number
    }
  }

  if (number !== "" && tasaEA !== "") {
    if (tSalida === "Mensual") {
      resultado = (((1+tasaEA/100)**(1/12))-1)*100
    } else if (tSalida === "Trimestral") {
      resultado = (((1+tasaEA/100)**(1/4))-1)*100
    } else if (tSalida === "Semestral") {
      resultado = (((1+tasaEA/100)**(1/2))-1)*100
    } else if (tSalida === "Anual") {
      resultado = tasaEA
    }
  }

  if (tIngresada === tSalida) {
    resultado = number
  }

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
        <select onChange={(e) => setTIngresada(e.target.value)}>
          <option disabled selected>Seleccione</option>
          <option>Mensual</option>
          <option>Trimestral</option>
          <option>Semestral</option>
          <option>Anual</option>
        </select>
        <span>Seleccione el tipo de tasa deseada</span>
        <select onChange={(e) => setTSalida(e.target.value)}>
          <option disabled selected>Seleccione</option>
          <option>Mensual</option>
          <option>Trimestral</option>
          <option>Semestral</option>
          <option>Anual</option>
        </select>
        <span>Resultado:</span>
        <div className="d-flex">
          <span>{resultado}</span>
          {number !== "" ? "%" : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
