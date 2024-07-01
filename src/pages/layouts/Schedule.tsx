import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Schedule() {
  return (
    <>
      <div className="w-screen h-screen p-4 sm:ml-64">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-3xl">Schedule</h1>
          <div className="flex items-center">
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

        <div className="bg-[#dddddd] mt-4 mb-4 p-6 rounded-2xl">
          <div className="flex justify-center items-center">
            <Calendar />
          </div>
        </div>

        <div className="bg-[#dddddd] p-6 rounded-2xl">
          <h1 className="font-bold text-xl mb-4">Upcoming Classes</h1>
          <ul>
            {["Pertemuan 1", "Pertemuan 2", "Pertemuan 3", "Pertemuan 4"].map(
              (meeting, index) => (
                <li
                  key={index}
                  className="bg-white mt-2 py-2 px-4 w-full flex justify-between items-center rounded-lg"
                >
                  <input type="checkbox" className="w-6 h-6 mr-2" />
                  <h2 className="flex-1">{meeting}</h2>
                  <h2 className="flex-1">Sales Marketing</h2>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
