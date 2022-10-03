import { useState, useEffect } from 'react';
import Header from './components/Header';

import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import Filtro from './components/Filtro';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos')
      ? JSON.parse(localStorage.getItem('gastos'))
      : []
  );
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);
  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        setIsValidPresupuesto={setIsValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtro filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              eliminarGasto={eliminarGasto}
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              onClick={handleNuevoGasto}
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
