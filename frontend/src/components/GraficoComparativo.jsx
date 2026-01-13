import { Bar } from "react-chartjs-2";

function GraficoComparativo({ comparativo }) {
  if (!comparativo) return null;

  const data = {
    labels: comparativo.map(f => f.nome),
    datasets: [
      {
        label: "Custo total (R$)",
        data: comparativo.map(f => f.custo_total)
      }
    ]
  };

  return <Bar data={data} />;
}

export default GraficoComparativo;
