import React from "react";
import styles from "./TableIMC.module.css";

const TableIMC = ({ showTable }) => {
  return (
    <div>
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
  );
};

export default TableIMC;
