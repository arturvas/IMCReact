import { useState } from "react";
import "./App.css";

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
        <div className="form">
          <input
            type="number"
            placeholder="Altura (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Peso (kg)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <button onClick={calculateIMC}>Calcular IMC</button>
        </div>
        {imc !== null && (
          <div className="result">
            <p>Seu IMC é: {imc}</p>
            <p>Classificação: {sortIMC()}</p>
          </div>
        )}
        <button onClick={toggleTable}>
          {showTable ? "Ocultar Tabela" : "Mostrar Tabela"}
        </button>
        {showTable && (
          <table>
            <thead>
              <tr>
                <th>Classificação</th>
                <th>IMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abaixo do peso</td>
                <td>Menor que 18.5</td>
              </tr>
              <tr>
                <td>Peso normal</td>
                <td>18.5 - 24.9</td>
              </tr>
              <tr>
                <td>Sobrepeso</td>
                <td>25 - 29.9</td>
              </tr>
              <tr>
                <td>Obesidade</td>
                <td>30 ou mais</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
