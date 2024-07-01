import { useState } from "react";
import GradeModal from "../../components/GradeModal";
import NoteModal from "../../components/NoteModal";
import GradeGraph from "../../components/GradeGraph";

const grades = [
  { name: "Budi", grade: 100 },
  { name: "Jamal", grade: 95 },
  { name: "Rudi", grade: 85 },
  { name: "Asep", grade: 83 },
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
      <div className="h-full p-4 sm:ml-64 bg-[#F5F5F5]">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="font-bold text-3xl">Grades</h1>
          <div className="flex items-center mt-4 sm:mt-0">
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              className="bg-gray-400 h-10 w-10 rounded-full mr-2"
              alt="user photo"
            />
            <div className="flex flex-col">
              <h2 className="font-bold">Budi Sanjaya</h2>
              <h3 className="text-sm">Division Sales Marketing</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {grades.map((grade, index) => (
            <div key={index} className="flex flex-col items-center w-1/3">
              <GradeGraph label={grade.name} dataValues={[75, 70, 85, 67]} />
              <button
                type="button"
                className="bg-blue-500 text-white w-[100px] h-[30px] mt-2 rounded-lg"
              >
                Grade
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-auto mt-6 flex flex-col justify-center items-center text-center">
          <div className="text-xl sm:text-3xl mb-4 sm:mb-0 sm:mr-4">
            <div>
              Division: <span className="font-bold">Sales Marketing</span>
            </div>
            <div>
              Mengulang: <span className="font-bold">0</span>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-xl text-xl sm:text-2xl mt-3">
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

        <div className="w-full h-[10vh] mt-4 flex justify-between border-t-4 border-gray-400 pt-2">
          <button onClick={handlePreviousClick} className="text-blue-700">
            Note
          </button>
          <button onClick={handleNextClick} className="text-blue-700">
            Grade Division
          </button>
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
