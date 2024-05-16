import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
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
        <div className="bg-red-400 w-full h-[20vh]"></div>
      </div>
    </>
  );
}
