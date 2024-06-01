import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const navigate = useNavigate();

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
      <Sidebar />
      <div className="p-4 sm:ml-64 bg-[#F5F5F5]">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold">Halo budi👋</h1>
            <h2 className="text-gray-400">Ayo Belajar Mulai Hari Ini!</h2>
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

        <div className="flex p-10 border-b-2">
          <div className="block max-w-sm m-2 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Company
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              commodi libero beatae quibusdam officia qui nemo esse. Sint nihil,
              nesciunt quasi perferendis cumque deserunt doloremque. Repellat
              rerum nulla nihil pariatur?
            </p>
          </div>
          <div className="block max-w-sm m-2 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Division
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tempore assumenda labore. Totam iure cupiditate quas praesentium
              quos fugiat tenetur tempora, aliquam modi debitis est adipisci
              vero culpa accusantium alias?
            </p>
          </div>
          <div className="block max-w-sm m-2 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Job Description
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              veritatis voluptatem maiores hic cum? Libero tempora dolore esse,
              repudiandae sequi, blanditiis excepturi ratione inventore officia
              enim reprehenderit hic necessitatibus numquam.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 ml-4">
          <div className="col-span-2 flex justify-center items-center">
            <div className="grid mb-8 mt-8 md:mb-12 md:grid-cols-2 ">
              <button className="p-8 px-[12vh]  m-2 bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
                <figcaption className="flex items-center justify-center ">
                  {filePen}
                  <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                    <div>Sub module 1.1</div>
                    <div className="text-sm text-white">OXF/ENG/01</div>
                  </div>
                </figcaption>
              </button>
              <button className="p-8 px-[12vh] m-2 bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
                <figcaption className="flex items-center justify-center ">
                  {filePen}
                  <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                    <div>Sub module 1.3</div>
                    <div className="text-sm text-white">OXF/ENG/03</div>
                  </div>
                </figcaption>
              </button>
              <button className="p-8 px-[12vh] m-2 bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
                <figcaption className="flex items-center justify-center ">
                  {filePen}
                  <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                    <div>Sub module 1.2</div>
                    <div className="text-sm text-white">OXF/ENG/02</div>
                  </div>
                </figcaption>
              </button>
              <button className="p-8 px-[12vh] m-2 bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
                <figcaption className="flex items-center justify-center ">
                  {filePen}
                  <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                    <div>Sub module 1.4</div>
                    <div className="text-sm text-white">OXF/ENG/04</div>
                  </div>
                </figcaption>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center border-l-2 border-b-2">
            <div className="bg-white w-[40vh] h-[45vh] rounded-xl p-6">
              <h2 className="font-medium mb-2">To Do List</h2>
              <div className="flex border-b-2">
                <input type="checkbox" className="mr-7 w-4" />
                <div className="flex-col">
                  <h2 className="">Sub module 1.4</h2>
                  <h3 className="text-gray-400">Tuesday, 29 June 2021</h3>
                </div>
              </div>
              <div className="flex border-b-2">
                <input type="checkbox" className="mr-7 w-4" />
                <div className="flex-col">
                  <h2 className="">Sub module 1.3</h2>
                  <h3 className="text-gray-400">Tuesday, 29 June 2021</h3>
                </div>
              </div>
              <div className="flex border-b-2">
                <input type="checkbox" className="mr-7 w-4" />
                <div className="flex-col">
                  <h2 className="">Sub module 1.2</h2>
                  <h3 className="text-gray-400">Tuesday, 28 June 2021</h3>
                </div>
              </div>
              <div className="flex border-b-2">
                <input type="checkbox" className="mr-7 w-4" />
                <div className="flex-col">
                  <h2 className="">Sub module 1.1</h2>
                  <h3 className="text-gray-400">Tuesday, 25 June 2021</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full grid grid-cols-3 ml-4">
          <div className="col-span-2 border-t-2 border-r-2 ">
            <div className="flex justify-between">
              <div className="flex-none w-[60%]">
                <h2 className="text-2xl">Rangkings</h2>
                <div className="flex flex-row ">
                  <h3 className="mr-10">Rank</h3>
                  <h3>Student Name</h3>
                </div>
                <ul>
                  <li className="flex flex-row pb-1 border-solid border-b-2 border-[#C9C9C9]">
                    <h3 className="mr-16">01</h3>
                    <img
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      className="bg-gray-400 h-7 w-7 rounded-full mr-4"
                      alt="user photo"
                    />
                    <h3>Budi</h3>
                  </li>
                  <li className="flex flex-row pb-1 border-solid border-b-2 border-[#C9C9C9]">
                    <h3 className="mr-16">02</h3>
                    <img
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      className="bg-gray-400 h-7 w-7 rounded-full mr-4"
                      alt="user photo"
                    />
                    <h3>Jamal</h3>
                  </li>
                  <li className="flex flex-row pb-1 border-solid border-b-2 border-[#C9C9C9]">
                    <h3 className="mr-16">03</h3>
                    <img
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      className="bg-gray-400 h-7 w-7 rounded-full mr-4"
                      alt="user photo"
                    />
                    <h3>Rudi</h3>
                  </li>
                  <li className="flex flex-row pb-1 border-solid border-b-2 border-[#C9C9C9]">
                    <h3 className="mr-16">04</h3>
                    <img
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      className="bg-gray-400 h-7 w-7 rounded-full mr-4"
                      alt="user photo"
                    />
                    <h3>Asep</h3>
                  </li>
                </ul>
              </div>
              <div className="bg-[#E4E4E4] w-[30vh] h-[30vh] mr-6 mt-3 flex flex-col justify-center items-center">
                <div className="relative flex justify-center items-center">
                  <svg
                    className="absolute"
                    width="15vh"
                    height="15vh"
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
                  <div className="bg-white rounded-full w-[12vh] h-[12vh] flex justify-center items-center mb-2">
                    {percentage} %
                  </div>
                </div>
                <h2>Weekly Progress</h2>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => navigate("/schedule")}
                className="bg-[#E4E4E4] w-[45vh] h-[15vh] rounded-xl p-4"
              >
                <div className="flex justify-between">
                  <button>{angleLeft}</button>
                  <h2>Maret 2021</h2>
                  <button>{angleRight}</button>
                </div>
                <div className="flex justify-around">
                  <span className="w-[2vh]">M</span>
                  <span className="w-[2vh]">T</span>
                  <span className="w-[2vh]">W</span>
                  <span className="w-[2vh]">T</span>
                  <span className="w-[2vh]">F</span>
                  <span className="w-[2vh]">S</span>
                  <span className="w-[2vh]">S</span>
                </div>
                <div className="flex justify-around">
                  <button className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    24
                  </button>
                  <button className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    25
                  </button>
                  <button className="bg-blue-500 text-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    26
                  </button>
                  <button className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    27
                  </button>
                  <button className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    28
                  </button>
                  <button className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    29
                  </button>
                  <button className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    30
                  </button>
                </div>
              </button>
            </div>
            <div className="mt-2">Upcoming Class</div>
            <div className="flex justify-around mt-2">
              <div className="flex justify-center items-center w-[12vh] h-[8vh] rounded-xl border-gray-400 border-2">
                13/04
              </div>
              <div className="flex justify-center items-center">
                Pertemuan 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
