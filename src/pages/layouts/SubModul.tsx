import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/Sidebar";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

export default function SubModule() {
  const filePen = (
    <FontAwesomeIcon icon={faFilePen} className="text-white h-10" />
  );
  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64 bg-[#F5F5F5]">
        <div className="flex justify-between mb-8">
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

          <div className="flex items-center justify-center gap-4">
            <button className="p-4 px-[12vh] bg-[#34A1FC] rounded-xl md:rounded-ss-lg md:border-e">
              <figcaption className="flex items-center justify-center ">
                {filePen}
                <div className="space-y-0.5 text-white text-left rtl:text-right ms-3">
                  <div>Sub module 1.1</div>
                  <div className="text-sm text-white">OXF/ENG/01</div>
                </div>
              </figcaption>
            </button>

            <div className="bg-[#23265d] w-[12vh] h-[12vh] rounded-full flex items-center justify-center text-[#dedef0]">
              xx%
            </div>
          </div>
        </div>

        <div className="bg-[#23265d] p-8 w-[142vh] h-[40vh] rounded-xl flex items-center justify-center text-[#dedef0]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi
          officiis voluptas molestiae neque aperiam quaerat, quia unde,
          quibusdam rerum distinctio possimus nulla commodi nesciunt dolor modi
          eaque ea deleniti. Nesciunt a incidunt unde quibusdam ut qui officiis
          enim rem, placeat nam fuga velit doloribus repellendus nemo tenetur
          eius excepturi impedit voluptatem sequi culpa porro? Aliquam sequi
          modi nulla hic. Optio corporis laudantium autem. Praesentium culpa
          laborum deleniti porro, rerum fugiat cumque voluptatum impedit
          veritatis dolores perspiciatis corporis sapiente ut inventore. Magni
          doloribus voluptatibus veritatis, aspernatur doloremque accusamus
          porro? Rem?
        </div>

        <div className="flex p-10">
          <div className="block max-w-sm m-2 p-6 border rounded-lg shadow bg-[#23265d] border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking text-white">
              Requirement
            </h5>
            <p className="font-normal text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              commodi libero beatae quibusdam officia qui nemo esse. Sint nihil,
              nesciunt quasi perferendis cumque deserunt doloremque. Repellat
              rerum nulla nihil pariatur?
            </p>
          </div>
          <div className="block max-w-sm m-2 p-6 border rounded-lg shadow bg-[#23265d] border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Penguji
            </h5>
            <p className="font-normal  text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tempore assumenda labore. Totam iure cupiditate quas praesentium
              quos fugiat tenetur tempora, aliquam modi debitis est adipisci
              vero culpa accusantium alias?
            </p>
          </div>
          <div className="block max-w-sm m-2 p-6 border rounded-lg shadow bg-[#23265d] border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Jadwal
            </h5>
            <p className="font-normal  text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              veritatis voluptatem maiores hic cum? Libero tempora dolore esse,
              repudiandae sequi, blanditiis excepturi ratione inventore officia
              enim reprehenderit hic necessitatibus numquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
