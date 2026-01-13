import { useState } from "react";
import UploadConta from "../components/UploadConta";
import ResultadoSimulacao from "../components/ResultadoSimulacao";
import GraficoComparativo from "../components/GraficoComparativo";

function Home() {
  const [resultado, setResultado] = useState(null);

  return (
    <div className="container">
      <h1>Simulador de Energia ⚡</h1>

      <UploadConta onResultado={setResultado} />

      {resultado && (
        <>
          <ResultadoSimulacao resultado={resultado} />
          <GraficoComparativo comparativo={resultado.comparativo} />
        </>
      )}
    </div>
  );
}

export default Home;
