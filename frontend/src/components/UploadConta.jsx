import { useState } from "react";
import api from "../services/api";

function UploadConta({ onResultado }) {
  const [arquivo, setArquivo] = useState(null);
  const [loading, setLoading] = useState(false);

  async function enviarPdf() {
    if (!arquivo) {
      alert("Selecione um PDF");
      return;
    }

    const formData = new FormData();
    formData.append("file", arquivo);

    try {
      setLoading(true);
      const response = await api.post("/simular-pdf", formData);
      onResultado(response.data);
    } catch (error) {
      alert("Erro ao processar o PDF");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setArquivo(e.target.files[0])}
      />

      <button onClick={enviarPdf} disabled={loading}>
        {loading ? "Processando..." : "Simular"}
      </button>
    </div>
  );
}

export default UploadConta;
