import Sidebar from "../../components/Sidebar";
import poster from "../../assets/poster_dashboard.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const filePen = (
    <FontAwesomeIcon icon={faFilePen} className="text-white h-10" />
  );
  const angleRight = <FontAwesomeIcon icon={faAngleRight} />;
  const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />;
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
        <div className="w-full h-[25vh] mt-4 relative overflow-hidden">
          <img src={poster} alt="Poster" className="absolute object-cover" />
        </div>

        <div className="w-full grid grid-cols-3 ml-4">
          <div className="col-span-2">
            <div className="grid mb-8 mt-8 md:mb-12 md:grid-cols-2 ">
              <figure className="p-8 m-4 bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
                <figcaption className="flex items-center justify-center ">
                  {filePen}
                  <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                    <div>Sub module 1.1</div>
                    <div className="text-sm text-white">OXF/ENG/01</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="p-8 m-4 bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
                <figcaption className="flex items-center justify-center ">
                  {filePen}
                  <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                    <div>Sub module 1.3</div>
                    <div className="text-sm text-white">OXF/ENG/03</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="p-8 m-4 bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
                <figcaption className="flex items-center justify-center ">
                  {filePen}
                  <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                    <div>Sub module 1.2</div>
                    <div className="text-sm text-white">OXF/ENG/02</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="p-8 m-4 bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
                <figcaption className="flex items-center justify-center ">
                  {filePen}
                  <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                    <div>Sub module 1.4</div>
                    <div className="text-sm text-white">OXF/ENG/04</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="flex items-center justify-center border-l-2 border-b-2">
            <div className="bg-white w-[40vh] h-[45vh] rounded-xl p-6">
              <h2 className="font-medium mb-2">To Do List</h2>
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
                <div className="bg-white rounded-full w-[15vh] h-[15vh] flex justify-center items-center mb-2">
                  75 %
                </div>
                <h2>Weekly Progress</h2>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#E4E4E4] w-[45vh] h-[15vh] rounded-xl p-4">
                <div className="flex justify-between">
                  {angleLeft}
                  <h2>Maret 2021</h2>
                  {angleRight}
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
                  <span className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    24
                  </span>
                  <span className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    25
                  </span>
                  <span className="bg-blue-500 text-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    26
                  </span>
                  <span className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    27
                  </span>
                  <span className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    28
                  </span>
                  <span className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    29
                  </span>
                  <span className="bg-white rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                    30
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2">Upcoming Class</div>
            <div className="flex justify-around mt-2">
              <div className="flex justify-center items-center w-[12vh] h-[8vh] rounded-xl border-gray-400 border-2">13/04</div>
              <div className="flex justify-center items-center">Pertemuan 1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
