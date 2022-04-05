import React from "react";
// componente que sirve para mostrar los gastos 
const Gasto = ({ gasto }) => {
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}

        <span className="gasto"> $ {gasto.cantidad}</span>
      </p>
    </li>
  );
};

export default Gasto;
