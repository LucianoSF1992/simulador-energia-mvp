function ResultadoSimulacao({ resultado }) {
  return (
    <div className="card">
      <h2>Resultado</h2>

      <p><strong>Consumo:</strong> {resultado.consumo_kwh} kWh</p>
      <p><strong>Valor atual:</strong> R$ {resultado.valor_atual}</p>

      <h3>Melhor fornecedora</h3>
      <p>
        {resultado.melhor_fornecedora.nome} —
        R$ {resultado.melhor_fornecedora.custo_total}
      </p>

      {resultado.economia !== null && (
        <p className="economia">
          Economia estimada: R$ {resultado.economia}
        </p>
      )}
    </div>
  );
}

export default ResultadoSimulacao;
