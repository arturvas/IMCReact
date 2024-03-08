import React from "react";
import styles from "./ResultIMC.module.css";

const ResultIMC = ({ imc, sortIMC }) => {
  return (
    <div className={styles.result}>
      <p>Seu IMC é: {imc}</p>
      <p>Classificação: {sortIMC()}</p>
    </div>
  );
};

export default ResultIMC;
