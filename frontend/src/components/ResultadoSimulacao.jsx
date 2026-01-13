function ResultadoSimulacao({ resultado }) {
  if (!resultado) return null;

  return (
    <div>
      <h2>Resultado da Simulação</h2>

      <p><strong>Consumo:</strong> {resultado.consumo_kwh} kWh</p>
      <p><strong>Valor atual:</strong> R$ {resultado.valor_atual}</p>

      <h3>Melhor fornecedora</h3>
      <p>
        {resultado.melhor_fornecedora.nome} —
        R$ {resultado.melhor_fornecedora.custo_total}
      </p>

      {resultado.economia !== null && (
        <h3>Economia estimada: R$ {resultado.economia}</h3>
      )}
    </div>
  );
}

export default ResultadoSimulacao;
