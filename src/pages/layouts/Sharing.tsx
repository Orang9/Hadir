import { faMessage, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/Sidebar";

export default function Sharing() {
  const messageIcon = <FontAwesomeIcon icon={faMessage} size="lg" />;
  const likeIcon = <FontAwesomeIcon icon={faThumbsUp} size="lg" />;
  return (
    <>
      <Sidebar />

      <div className="w-full h-full bg-[#F5F5F5] ">
        <div className="p-4 sm:ml-64">
          <div className="grid grid-cols-5 gap-4">
            <div>
              <div className="border-2 border-solid border-black p-4 rounded-xl">
                <h2 className="mb-4 font-bold">Filter Diskusi</h2>
                <div className="flex items-center mb-2 px-2">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="semuaDiskusi"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="semuaDiskusi"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Semua diskusi
                  </label>
                </div>
                <div className="flex items-center mb-2 px-2">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="pertanyaanSaya"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="pertanyaanSaya"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Pertanyaan saya
                  </label>
                </div>
                <div className="flex items-center mb-2 px-2">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="partisipasiSaya"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="partisipasiSaya"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Partisipasi saya
                  </label>
                </div>
                <div className="flex items-center mb-3 px-2 pb-4 border-b-2 border-solid border-black">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="jawabanSaya"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="jawabanSaya"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Jawaban saya
                  </label>
                </div>
                <div className="flex items-center mb-2 px-2">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="diskusiSudahSelesai"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="diskusiSudahSelesai"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Diskusi sudah selesai
                  </label>
                </div>
                <div className="flex items-center mb-4 px-2 pb-4 border-b-2 border-solid border-black">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="diskusiBelumSelesai"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="diskusiBelumSelesai"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Diskusi belum selesai
                  </label>
                </div>
                <div className="flex items-center mb-2 px-2">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="diskusiTerlama"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="diskusiTerlama"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Diskusi terlama
                  </label>
                </div>
                <div className="flex items-center mb-4 px-2 pb-4 border-b-2 border-solid border-black">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="diskusiTerbaru"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="diskusiTerbaru"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Diskusi terbaru
                  </label>
                </div>
                <div className="flex items-center mb-2 px-2">
                  <input
                    type="radio"
                    name="filterDiskusi"
                    id="diskusiBelumAdaBalasan"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="diskusiBelumAdaBalasan"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Belum ada balasan
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-12 py-2.5 text-center me-2 my-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Mulai Bertanya
              </button>
            </div>

            <div className="col-start-2 col-end-6">
              <div className="w-full p-4 mb-4 border-2 border-solid border-blue-500 rounded-xl">
                <h2 className="text-2xl font-bold mb-5">
                Bagaimana cara mengkomunikasikan dan menjelaskan produk perusahaan secara efektif kepada calon klien? (Terkait Modul 1 & 2)
                </h2>
                <div className="flex justify-between mb-5">
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
                  <div>
                    <h2 className="text-gray-400">5 hari yang lalu</h2>
                  </div>
                </div>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus quisquam amet magnam, laboriosam fugit distinctio
                  quaerat neque ipsam optio eos, enim accusantium iste sit
                  debitis molestiae officia non odit maiores. Cupiditate
                  dignissimos tempora labore eaque temporibus saepe molestias
                  repudiandae, itaque veritatis odit nisi sit impedit quos quas
                  ut sequi natus nihil perferendis explicabo adipisci nobis id
                  ab! Voluptatem, natus placeat. Aspernatur tempore laboriosam
                  facilis aliquam illum blanditiis veniam deserunt. Vitae
                  quisquam natus iure sint culpa ab temporibus molestiae?
                  Ducimus fugiat fugit fuga iste earum ad modi rem ipsam. Nemo,
                  praesentium. Libero illo aspernatur necessitatibus atque
                  itaque dicta ipsam optio sequi animi eveniet! Nihil
                  praesentium sit nisi error autem hic, voluptas aliquid quae!
                  Laborum et aperiam a quidem eligendi libero illum.
                </p>
                <div className="flex items-center">
                  {likeIcon}
                  <p className="px-3">50 Jawaban</p>
                </div>
                <div className="flex items-center">
                  {messageIcon}
                  <p className="px-3">10 Jawaban</p>
                </div>
              </div>
              <div className="w-full p-4 mb-4 border-2 border-solid border-blue-500 rounded-xl">
                <h2 className="text-2xl font-bold mb-5">
                Bagaimana cara memahami kebutuhan klien secara mendalam agar dapat menyusun strategi pitching yang tepat? (Terkait Modul 3)
                </h2>
                <div className="flex justify-between mb-5">
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
                  <div>
                    <h2 className="text-gray-400">3 hari yang lalu</h2>
                  </div>
                </div>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, eos. Culpa, officia iste? Aliquid delectus sed deleniti
                  voluptas nostrum quae quas obcaecati, error, laudantium
                  blanditiis corporis, dolor neque soluta. Nobis. Accusamus ea
                  tenetur deleniti repellendus eligendi, veniam corrupti
                  adipisci iusto dolores eaque officia modi voluptatibus dolor
                  totam aspernatur atque et itaque. Aliquid necessitatibus
                  assumenda ipsa debitis porro recusandae quis. Modi? Eum harum
                  voluptate ipsum illo iste, sed perferendis esse dolor,
                  officiis cupiditate tempore at dolore libero, maxime cumque.
                  A, corrupti ab delectus quis fuga nemo itaque. Rem
                  reprehenderit odit non.
                </p>
                <div className="flex items-center">
                  {likeIcon}
                  <p className="px-3">20 Jawaban</p>
                </div>
                <div className="flex items-center">
                  {messageIcon}
                  <p className="px-3">5 Jawaban</p>
                </div>
              </div>
              <div className="w-full p-4 mb-4 border-2 border-solid border-blue-500 rounded-xl">
                <h2 className="text-2xl font-bold mb-5">
                Apa saja faktor yang perlu dipertimbangkan saat menentukan harga dan bagaimana cara melakukan negosiasi yang baik? (Terkait Modul 4)
                </h2>
                <div className="flex justify-between mb-5">
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
                  <div>
                    <h2 className="text-gray-400">1 hari yang lalu</h2>
                  </div>
                </div>
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore laudantium placeat facere repudiandae obcaecati a iure
                  quo ex deleniti nobis cumque officiis explicabo quas in harum
                  impedit voluptatem, quisquam ipsum!
                </p>
                <div className="flex items-center">
                  {likeIcon}
                  <p className="px-3">0 Jawaban</p>
                </div>
                <div className="flex items-center">
                  {messageIcon}
                  <p className="px-3">0 Jawaban</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around">
            <button className="text-blue-700 focus:outline-none font-medium rounded-full text-sm px-12 py-2.5 text-center me-2 mb-2 hover:bg-blue-500 border border-gray-400">
              Previous
            </button>
            <button className="text-blue-700 focus:outline-none font-medium rounded-full text-sm px-12 py-2.5 text-center me-2 mb-2 hover:bg-blue-500 border border-gray-400">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
