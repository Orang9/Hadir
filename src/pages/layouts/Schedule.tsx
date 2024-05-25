import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Sidebar from "../../components/Sidebar";

export default function Schedule() {
  return (
    <>
      <Sidebar />
      <div className="w-screen h-screen bg-[#F5F5F5] ">
        <div className="p-4 sm:ml-64 ">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-3xl">Schedule</h1>
              <h2 className="text-gray-400">
                Perhatikan jadwal kamu jangan sampe ada yang terlewat!
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

          <div className="bg-[#dddddd] mt-4 mb-4 p-[5vh] rounded-2xl ">
            <div className="flex justify-center items-center">
              <Calendar />
            </div>
          </div>

          <div className="bg-[#dddddd] p-[5vh] rounded-2xl">
            <h1>Upcoming Class</h1>
            <ul>
              <li className="bg-white mt-2 pt-2 pb-2 pl-4 pr-[20vh]  w-full flex justify-between items-center  ">
              <input type="checkbox" className="w-6 h-8 mr-0" />
              <h2>Pertemuan 1</h2>
              <h2>Sales Marketing</h2>
              <h2>Zoom</h2>
              </li>
              <li className="bg-white mt-2 pt-2 pb-2 pl-4 pr-[20vh]  w-full flex justify-between items-center  ">
              <input type="checkbox" className="w-6 h-8 mr-0" />
              <h2>Pertemuan 1</h2>
              <h2>Sales Marketing</h2>
              <h2>Zoom</h2>
              </li>
              <li className="bg-white mt-2 pt-2 pb-2 pl-4 pr-[20vh]  w-full flex justify-between items-center  ">
              <input type="checkbox" className="w-6 h-8 mr-0" />
              <h2>Pertemuan 1</h2>
              <h2>Sales Marketing</h2>
              <h2>Zoom</h2>
              </li>
              <li className="bg-white mt-2 pt-2 pb-2 pl-4 pr-[20vh]  w-full flex justify-between items-center  ">
              <input type="checkbox" className="w-6 h-8 mr-0" />
              <h2>Pertemuan 1</h2>
              <h2>Sales Marketing</h2>
              <h2>Zoom</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
