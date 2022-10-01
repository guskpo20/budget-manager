import { useState } from 'react';
import Header from './components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from './components/Modal';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  return (
    <div>
      <Header
        setIsValidPresupuesto={setIsValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            onClick={handleNuevoGasto}
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      )}
    </div>
  );
}

export default App;
