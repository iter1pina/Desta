"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrando os componentes que serão usados no Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'], // Meses do ano
  datasets: [
    {
      label: 'Vendas',
      data: [300, 200, 350, 500, 450, 700, 300, 600, 800], // Dados de exemplo
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Vendas Mensais',
    },
  },
};

export default function Graficos() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl text-center mb-4">Gráfico de Barras</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
