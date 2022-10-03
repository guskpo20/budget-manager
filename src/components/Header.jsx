import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPesupuesto from './ControlPesupuesto';
const Header = ({
  setIsValidPresupuesto,
  isValidPresupuesto,
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPesupuesto
          setPresupuesto={setPresupuesto}
          setGastos={setGastos}
          gastos={gastos}
          presupuesto={presupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
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
