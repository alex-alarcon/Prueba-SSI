import React, { useCallback, useState } from 'react';

import FormDatosPersonales from '../formDatosPersonales';

function Form() {
  const [pasoActual, setPasoActual] = useState(1);
  const siguiente = useCallback(() => {
    setPasoActual(pasoActual + 1);
  }, [pasoActual]);
  const anterior = useCallback(() => {
    setPasoActual(pasoActual - 1);
  }, [pasoActual]);

  if (pasoActual === 1) {
    return <FormDatosPersonales continuar={siguiente} />;
  }
  if (pasoActual === 2) {
    return <div>Datos Laborales</div>;
  }
  if (pasoActual === 3) {
    return <div>Datos Productos</div>;
  }
  if (pasoActual === 4) {
    return <div>Vista Previa</div>;
  }
  if (pasoActual === 5) {
    return <div>Datos personales</div>;
  }

  return null;
}

export default Form;
