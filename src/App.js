import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spiner from "./components/Spiner";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 50px auto;
  -webkit-box-shadow: 0px 0px 41px 0px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 0px 41px 0px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 0px 41px 0px rgba(0, 0, 0, 0.48);
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, guardarCargando] = useState(false);

  // extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spiner /> : null}

        <Resumen datos={datos} />

        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
