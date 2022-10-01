import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPesupuesto from './ControlPesupuesto';
const Header = ({
  setIsValidPresupuesto,
  isValidPresupuesto,
  presupuesto,
  setPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPesupuesto presupuesto={presupuesto} />
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
