import React, { useState } from "react";
// import "./App.css";

import FormularyIMC from "./FormularyIMC";
import ResultIMC from "./ResultIMC";
import TableIMC from "./TableIMC";

function App() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [imc, setIMC] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const calculateIMC = () => {
    if (!height || !width) {
      alert("Preencha todos os campos.");
      return;
    }

    const heightMeters = height / 100;
    const imcResult = width / (heightMeters * heightMeters);
    setIMC(imcResult.toFixed(2));
  };

  const sortIMC = () => {
    if (imc === null) return "";

    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 24.9 && imc < 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <>
      <div className="App">
        <h1>Calculadora de IMC em React</h1>
        <FormularyIMC
          height={height}
          width={width}
          setHeight={setHeight}
          setWidth={setWidth}
          calculateIMC={calculateIMC}
        />
        {imc !== null && <ResultIMC imc={imc} sortIMC={sortIMC} />}
        <button onClick={toggleTable}>
          {showTable ? "Ocultar Tabela" : "Mostrar Tabela"}
        </button>
        <TableIMC showTable={showTable} />
      </div>
    </>
  );
}

export default App;
