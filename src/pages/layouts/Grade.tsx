import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import GradeModal from "../../components/GradeModal";
import NoteModal from "../../components/NoteModal";
import GradeGraph from "../../components/GradeGraph";

const grades = [
  { name: "Budi", grade: 100 },
  { name: "Jamal", grade: 95 },
  { name: "Rudi", grade: 85 },
  { name: "Asep", grade: 83 }
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

          <div className="flex justify-center items-center">
            <GradeGraph label="Budi" dataValues={[75, 70, 85, 67]} />
            <GradeGraph label="Jamal" dataValues={[80, 65, 75, 70]} />
            <GradeGraph label="Rudi" dataValues={[60, 75, 80, 90]} />
            <GradeGraph label="Asep" dataValues={[90, 80, 69, 81]} />
          </div>

          <div className="w-full h-[25vh] flex justify-center items-center ">
            <div className="text-3xl">
              <div>
                Division: <span className="font-bold">Sales Marketing</span>
              </div>
              <div>
                Mengulang: <span className="font-bold">0</span>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[20vh] flex justify-center items-center rounded-xl ">
            <div className="text-2xl">
              <div>
                Average Grade: <span className="font-bold">85.00</span>
              </div>
              <div>
                Completion: <span className="font-bold">26/04/2025</span>
              </div>
              <div>
                Status: <span className="font-bold">Passed</span>
              </div>
            </div>
          </div>
          <div className=" w-full h-[10vh] mt-2 flex justify-between border-t-4 border-gray-400">
            <button onClick={handlePreviousClick} className="text-blue-700">
              Note
            </button>
            <button onClick={handleNextClick} className="text-blue-700">
              Grade Division
            </button>
          </div>
        </div>
      </div>

      <GradeModal
        isOpen={isNextModalOpen}
        onClose={handleCloseNextModal}
        grades={grades}
      />
      <NoteModal
        isOpen={isPreviousModalOpen}
        onClose={handleClosePreviousModal}
      />
    </>
  );
}
