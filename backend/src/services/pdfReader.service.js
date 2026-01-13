const pdf = require("pdf-parse");

/**
 * Lê o PDF e retorna texto
 */
async function lerPdf(buffer) {
  const data = await pdf(buffer);
  return data.text;
}

/**
 * Extrai consumo (kWh) e valores do texto
 * (regex simples para MVP)
 */
function extrairDadosConta(texto) {
  // Normaliza texto
  const txt = texto.replace(/\s+/g, " ").toLowerCase();

  // Exemplos de padrões comuns em contas
  const consumoMatch = txt.match(/(\d+[.,]?\d*)\s*kwh/);
  const valorMatch = txt.match(/r\$\s*(\d+[.,]?\d*)/);

  return {
    consumo_kwh: consumoMatch
      ? parseFloat(consumoMatch[1].replace(",", "."))
      : null,

    valor_total: valorMatch
      ? parseFloat(valorMatch[1].replace(",", "."))
      : null
  };
}

module.exports = {
  lerPdf,
  extrairDadosConta
};
