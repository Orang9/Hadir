import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const navigate = useNavigate();

  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const filePen = (
    <FontAwesomeIcon icon={faFilePen} className="text-white h-10" />
  );
  const angleRight = <FontAwesomeIcon icon={faAngleRight} />;
  const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />;

  const percentage = 75;

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="flex flex-wrap justify-between">
          <div>
            <h1 className="text-3xl font-bold">Halo Budi👋</h1>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              className="bg-gray-400 h-10 w-10 rounded-full mr-2"
              alt="user photo"
            />
            <div className="flex-col">
              <h2 className="font-bold">Budi Sanjaya</h2>
              <h3>Division Sales Marketing</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap px-2 py-4">
          {["Company", "Division", "Job Description"].map((title, idx) => (
            <div key={idx} className="w-full sm:w-1/3 p-2">
              <div className="p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {title}
                </h5>
                <p className="font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
          <div className="w-full sm:w-1 lg:w-1/3 p-2">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 flex flex-col justify-center items-center mb-4">
                <div className="relative flex justify-center items-center">
                  <svg
                    className="absolute"
                    width="100%"
                    height="100%"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="#E4E4E4"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="#34A1FC"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-stroke duration-300 ease-in-out"
                    />
                  </svg>
                  <div className="bg-white rounded-full w-32 h-32 flex justify-center items-center mb-2">
                    {percentage} %
                  </div>
                </div>
                <h2 className="mt-2 text-center">Weekly Progress</h2>
              </div>
              <button
                onClick={() => navigate("/schedule")}
                className="bg-[#E4E4E4] w-full rounded-xl p-4"
              >
                <div className="flex justify-between">
                  <button>{angleLeft}</button>
                  <h2>Maret 2021</h2>
                  <button>{angleRight}</button>
                </div>
                <div className="flex justify-around mt-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <span key={index} className="w-4 text-center">
                      {day}
                    </span>
                  ))}
                </div>
                <div className="flex justify-around mt-2">
                  {[24, 25, 26, 27, 28, 29, 30].map((date, index) => (
                    <button
                      key={index}
                      className={`${
                        date === 26 ? "bg-blue-500 text-white" : "bg-white"
                      } rounded-full w-8 h-8 flex justify-center items-center`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </button>
              <div className="mt-4 text-center">Upcoming Class</div>
              <div className="flex justify-around mt-2">
                <div className="flex justify-center items-center w-24 h-12 rounded-xl border-gray-400 border-2">
                  13/04
                </div>
                <div className="flex justify-center items-center">
                  Pertemuan 1
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white w-full lg:w-96 h-96 rounded-xl p-6 ml-4">
              <h2 className="font-medium mb-2">To Do List</h2>
              <div>
                {[
                  "Sub module 1",
                  "Sub module 2",
                  "Sub module 3",
                  "Sub module 4",
                ].map((title, index) => (
                  <div className="flex border-b-2 pb-2 mb-2" key={index}>
                    <input
                      type="checkbox"
                      className="mr-4"
                      checked={checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <div className="flex-col">
                      <h2
                        className={`${
                          checkedItems[index]
                            ? "line-through text-gray-400"
                            : ""
                        }`}
                      >
                        {title}
                      </h2>
                      <h3 className="text-gray-400">Tuesday, 29 June 2021</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start ml-4">
            <div className="grid mb-8 md:grid-cols-1 gap-2">
              {[
                "Communication & Networking Skills",
                "Pitching Skills",
                "Presentation Skills",
                "Negotiation Skills",
              ].map((skill, idx) => (
                <button
                  key={idx}
                  className="p-8 bg-[#34A1FC] rounded-xl flex items-center justify-center"
                >
                  {filePen}
                  <div className="ml-3 text-white">
                    <div>{skill}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
