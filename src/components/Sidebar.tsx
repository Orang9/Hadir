import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faChartSimple,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Sidebar() {
  let navigate = useNavigate();

  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const toggleCourseDropdown = () => {
    setIsCourseDropdownOpen(!isCourseDropdownOpen);
  };

  const box = <FontAwesomeIcon icon={faBoxArchive} />;
  const graph = <FontAwesomeIcon icon={faChartSimple} />;
  const gear = <FontAwesomeIcon icon={faGear} />;

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <button
            className="flex items-center ps-2.5 mb-5"
            onClick={() => navigate("/dashboard")}
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              [ KnowledgeHub ]
            </span>
          </button>
          <ul className="font-medium flex flex-col justify-between h-[94%]">
            <div>
              <li>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="flex items-center w-full p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={toggleCourseDropdown}
                  className="flex items-center w-full p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 text-gray-400 group-hover group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    {box}
                  </svg>
                  <span className="ms-3 whitespace-nowrap">Course</span>
                  <svg
                    className="w-4 h-4 ms-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {isCourseDropdownOpen && (
                  <ul className="space-y-2 ps-5">
                    <li>
                      <button
                        onClick={() => navigate("/course/module")}
                        className="flex items-center w-full p-2 rounded-lg text-white  hover:bg-gray-700 group"
                      >
                        <span className="ms-3 whitespace-nowrap">
                          Communication & Netw
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/course/module")}
                        className="flex items-center w-full p-2 rounded-lg text-white  hover:bg-gray-700 group"
                      >
                        <span className="ms-3 whitespace-nowrap">
                          Presentation Skills
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/course/module")}
                        className="flex items-center w-full p-2 rounded-lg text-white  hover:bg-gray-700 group"
                      >
                        <span className="ms-3 whitespace-nowrap">
                          Pitching Skills
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/course/module")}
                        className="flex items-center w-full p-2 rounded-lg text-white  hover:bg-gray-700 group"
                      >
                        <span className="ms-3 whitespace-nowrap">
                          Negotation Skills
                        </span>
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => navigate("/sharing")}
                  className="flex items-center w-full p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="ms-3 whitespace-nowrap">
                    Knowledge Sharing
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/grade")}
                  className="flex items-center w-full p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {graph}
                  </svg>
                  <span className="ms-3 whitespace-nowrap">Grades</span>
                </button>
              </li>
            </div>

            <div>
              <li>
                <button
                  onClick={() => navigate("/setting")}
                  className="flex items-center w-full p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {gear}
                  </svg>
                  <span className="ms-3 whitespace-nowrap">Settings</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center w-full p-2 rounded-lg text-white  hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover group-hover:text-white"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="ms-3">Log out</span>
                </button>
              </li>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
}
