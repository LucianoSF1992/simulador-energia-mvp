/**
 * Calcula o custo total mensal por fornecedor
 */
function calcularCustoFornecedor(consumoKwh, fornecedor) {
  const custo =
    (fornecedor.valor_potencia || 0) +
    (fornecedor.valor_acesso_potencia || 0) +
    (consumoKwh * (fornecedor.valor_consumo || 0)) +
    (fornecedor.valor_acesso_consumo || 0);

  return Number(custo.toFixed(2));
}

/**
 * Retorna a melhor fornecedora (menor custo)
 */
function calcularMelhorFornecedora(consumoKwh, fornecedores) {
  const comparativo = fornecedores.map(f => ({
    fornecedor_id: f.id,
    nome: f.nome,
    custo_total: calcularCustoFornecedor(consumoKwh, f)
  }));

  comparativo.sort((a, b) => a.custo_total - b.custo_total);

  return {
    melhor: comparativo[0],
    comparativo
  };
}

module.exports = {
  calcularMelhorFornecedora
};
