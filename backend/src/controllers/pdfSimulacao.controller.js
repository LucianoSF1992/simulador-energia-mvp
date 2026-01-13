const db = require("../database/connection");
const { lerPdf, extrairDadosConta } = require("../services/pdfReader.service");
const { calcularMelhorFornecedora } = require("../services/calculoEnergia.service");

/**
 * Upload do PDF + leitura + simulação automática
 */
async function simularPorPdf(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ erro: "Arquivo PDF não enviado" });
    }

    // 1) Ler PDF
    const textoPdf = await lerPdf(req.file.buffer);

    // 2) Extrair dados
    const dadosConta = extrairDadosConta(textoPdf);

    if (!dadosConta.consumo_kwh) {
      return res.status(400).json({
        erro: "Não foi possível identificar o consumo (kWh) no PDF"
      });
    }

    // 3) Buscar fornecedores
    const [fornecedores] = await db.query("SELECT * FROM fornecedores");

    if (fornecedores.length === 0) {
      return res.status(400).json({
        erro: "Nenhum fornecedor cadastrado"
      });
    }

    // 4) Calcular melhor fornecedora
    const resultado = calcularMelhorFornecedora(
      dadosConta.consumo_kwh,
      fornecedores
    );

    // 5) Calcular economia (se valor atual existir)
    let economia = null;
    if (dadosConta.valor_total) {
      economia = Number(
        (dadosConta.valor_total - resultado.melhor.custo_total).toFixed(2)
      );
    }

    // 6) Salvar simulação
    await db.query(
      `INSERT INTO simulacoes
       (consumo_kwh, melhor_fornecedor, custo_atual, custo_simulado, economia)
       VALUES (?, ?, ?, ?, ?)`,
      [
        dadosConta.consumo_kwh,
        resultado.melhor.nome,
        dadosConta.valor_total || null,
        resultado.melhor.custo_total,
        economia
      ]
    );

    // 7) Retorno final
    return res.json({
      sucesso: true,
      consumo_kwh: dadosConta.consumo_kwh,
      valor_atual: dadosConta.valor_total,
      melhor_fornecedora: resultado.melhor,
      comparativo: resultado.comparativo,
      economia
    });

  } catch (error) {
    console.error("Erro na simulação por PDF:", error);
    return res.status(500).json({
      erro: "Erro ao processar simulação via PDF"
    });
  }
}

module.exports = {
  simularPorPdf
};
