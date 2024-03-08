import React from "react";
import styles from "./FormularyIMC.module.css";

const FormularyIMC = ({ height, width, setHeight, setWidth, calculateIMC }) => {
  return (
    <div className={styles.form}>
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
  );
};

export default FormularyIMC;
