import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPesupuesto from './ControlPesupuesto';
const Header = ({
  setIsValidPresupuesto,
  isValidPresupuesto,
  presupuesto,
  setPresupuesto,
  gastos,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPesupuesto gastos={gastos} presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
