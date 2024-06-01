import Sidebar from "../../components/Sidebar";
import poster from "../../assets/poster_dashboard.jpg";

export default function Grade() {
  return (
    <>
      <Sidebar />

      <div className="w-screen h-screen bg-[#F5F5F5] ">
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

          <div className="w-full h-[25vh] mt-4 relative overflow-hidden rounded-xl">
            <img src={poster} alt="Poster" className="absolute object-cover" />
          </div>

          <div className="w-full h-[25vh] mt-4 flex justify-center items-center ">
            <div className="text-3xl">
              <div>
                Division: <span className="font-bold">Sales Marketing</span>
              </div>
              <div>
                Module: <span className="font-bold">Module 1(....)</span>
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
            <button className="text-blue-700">Previous</button>
            <button className="text-blue-700">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
