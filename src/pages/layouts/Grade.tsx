import Sidebar from "../../components/Sidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import GradeModal from "../../components/GradeModal";
import NoteModal from "../../components/NoteModal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Grade",
    },
  },
};

const labels = ["Module 1", "Module 2", "Module 3", "Module 4", "Projects"];

export const data = {
  labels,
  datasets: [
    {
      label: "Communication & Networking Skills",
      data: labels.map(() => faker.datatype.number({ min: 80, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const grades = [
  { name: "Moriarty", grade: 100 },
  { name: "Elsa", grade: 95 },
  { name: "Budi", grade: 85 },
  { name: "Smith", grade: 83 },
  { name: "Cid", grade: 80 }
];

export default function Grade() {
  const [isNextModalOpen, setIsNextModalOpen] = useState(false);
  const [isPreviousModalOpen, setIsPreviousModalOpen] = useState(false);

  const handleNextClick = () => {
    setIsNextModalOpen(true);
  };

  const handlePreviousClick = () => {
    setIsPreviousModalOpen(true);
  };

  const handleCloseNextModal = () => {
    setIsNextModalOpen(false);
  };

  const handleClosePreviousModal = () => {
    setIsPreviousModalOpen(false);
  };
  return (
    <>
      <Sidebar />

      <div className="w-full h-full bg-[#F5F5F5] ">
        <div className="p-4 sm:ml-64 ">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-3xl">Grades</h1>
              <h2 className="text-gray-400">
                Setiap Usaha yang Dilakukan akan Menghasilkan Nilai yang Baik
              </h2>
            </div>
            <div className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                className="bg-gray-400 h-10 w-10 rounded-full mr-2"
                alt="user photo"
              />
              <div className="flex-row">
                <h2 className="font-bold">Budi Sanjaya</h2>
                <h3>Division Sales Marketing</h3>
              </div>
            </div>
          </div>

          <Line options={options} data={data} />

          <div className="w-full h-[25vh] mt-4 flex justify-center items-center ">
            <div className="text-3xl">
              <div>
                Division: <span className="font-bold">Sales Marketing</span>
              </div>
              <div>
                Module:{" "}
                <span className="font-bold">
                  Communication & Networking Skills
                </span>
              </div>
              <div>
                Mengulang: <span className="font-bold">0</span>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[20vh] mt-4 flex justify-center items-center rounded-xl ">
            <div className="text-2xl">
              <div>
                Grade: <span className="font-bold">85.00</span>
              </div>
              <div>
                Completion: <span className="font-bold">26/04/2005</span>
              </div>
              <div>
                Status: <span className="font-bold">Passed</span>
              </div>
            </div>
          </div>
          <div className=" w-full h-[10vh] mt-4 flex justify-between border-y-4 border-gray-400">
          <button onClick={handlePreviousClick} className="text-blue-700">Note</button>
          <button onClick={handleNextClick} className="text-blue-700">Grade Division</button>
          </div>
        </div>
      </div>

      <GradeModal isOpen={isNextModalOpen} onClose={handleCloseNextModal} grades={grades} />
      <NoteModal isOpen={isPreviousModalOpen} onClose={handleClosePreviousModal} />
    </>
  );
}
