import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface GradeGraphProps {
    label: string;
    dataValues: number[]; 
  }

export default function GradeGraph({label, dataValues}:GradeGraphProps) {
    
  const data = {
    labels: ["Communication & Networking Skills", "Pitching Skills", "Presentation Skills", "Negotation Skills"],
    datasets: [
      {
        label: label,
        data: dataValues,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    scales: {
      r: {
        ticks: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Radar data={data} options={options} />
    </div>
  );
}
