const db = require("../database/connection");
const { calcularMelhorFornecedora } = require("../services/calculoEnergia.service");

/**
 * Realiza a simulação de energia
 * Calcula a melhor fornecedora e salva no banco
 */
async function simularEnergia(req, res) {
  try {
    const { consumo_kwh, valor_atual } = req.body;

    // Validação básica
    if (!consumo_kwh || consumo_kwh <= 0) {
      return res.status(400).json({
        erro: "Consumo (kWh) inválido ou não informado"
      });
    }

    // Busca fornecedores no banco
    const [fornecedores] = await db.query(
      "SELECT * FROM fornecedores"
    );

    if (fornecedores.length === 0) {
      return res.status(400).json({
        erro: "Nenhum fornecedor cadastrado no sistema"
      });
    }

    // Calcula melhor fornecedora
    const resultado = calcularMelhorFornecedora(consumo_kwh, fornecedores);

    // Calcula economia (se valor atual for informado)
    let economia = null;
    if (valor_atual && valor_atual > 0) {
      economia = Number(
        (valor_atual - resultado.melhor.custo_total).toFixed(2)
      );
    }

    // Salva simulação no banco
    await db.query(
      `INSERT INTO simulacoes 
       (consumo_kwh, melhor_fornecedor, custo_atual, custo_simulado, economia)
       VALUES (?, ?, ?, ?, ?)`,
      [
        consumo_kwh,
        resultado.melhor.nome,
        valor_atual || null,
        resultado.melhor.custo_total,
        economia
      ]
    );

    // Retorno para o frontend
    return res.json({
      sucesso: true,
      consumo_kwh,
      melhor_fornecedora: resultado.melhor,
      comparativo: resultado.comparativo,
      economia
    });

  } catch (error) {
    console.error("Erro na simulação:", error);
    return res.status(500).json({
      erro: "Erro interno ao realizar a simulação"
    });
  }
}

module.exports = {
  simularEnergia
};
