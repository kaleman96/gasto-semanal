import React from "react";
import Gasto from "./Gasto";
//este componente itera todos los objtos de gastos y los manda en pantalla con el componentes gasto
const Listado = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};

export default Listado;
