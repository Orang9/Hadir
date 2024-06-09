import Sidebar from "../../components/Sidebar";
import poster from "../../assets/poster_dashboard.jpg";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Setting() {
  const emailIcon = (
    <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: "#74C0FC" }} />
  );
  return (
    <>
      <Sidebar />

      <div className="w-full h-full bg-[#F5F5F5] ">
        <div className="p-4 sm:ml-64 ">
          <div className="flex justify-between">
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
            <button className="bg-[#34A1FC] w-20 h-10 rounded-xl">
              <h2 className="text-white">Edit</h2>
            </button>
          </div>

          <div className="w-full h-[25vh] mt-4 mb-10 relative overflow-hidden rounded-xl">
            <img src={poster} alt="Poster" className="absolute object-cover" />
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            noValidate
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <input
              type="checkbox"
              className="hidden display:none"
              name="botcheck"
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-14">
            <div>
                <h2>Join Date:</h2>
                <input
                  type="text"
                  name="joinDate"
                  required
                  className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                  placeholder="Your Nick name"
                />
              </div>
              <div>
                <h2>Supervisor's Name:</h2>
                <input
                  type="text"
                  name="supervisor'sName"
                  required
                  className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                  placeholder="Your Nick name"
                />
              </div>
              <div>
                <h2>Full Name:</h2>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                  placeholder="Your Full Name"
                />
                <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                  Please provide your full name.
                </p>
              </div>
              <div>
                <h2>Nick Name:</h2>
                <input
                  type="text"
                  name="nickName"
                  required
                  className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                  placeholder="Your Nick name"
                />
                <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                  Please provide your nick name.
                </p>
              </div>
              <div>
                <h2>NIK:</h2>
                <input
                  type="text"
                  name="nik"
                  required
                  className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                  placeholder="Your Nick name"
                />
                <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                  Please provide your NIK.
                </p>
              </div>
              <div>
                <h2>Email:</h2>
                <input
                  type="email"
                  name="email"
                  required
                  className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                  placeholder="Email address*"
                />
                <p className="mt-2 hidden [.validated_&]:peer-placeholder-shown:peer-invalid:block text-pink-600 text-sm">
                  Please provide your email.
                </p>
                <p className="mt-2 hidden [.validated_&]:peer-[:not(:placeholder-shown)]:peer-invalid:block text-pink-600 text-sm">
                  Please enter a valid email address.
                </p>
              </div>
              <div>
                <h2>Phone:</h2>
                <input
                  type="text"
                  name="phone"
                  required
                  className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                  placeholder="Phone*"
                />
                <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                  Please provide your phone number.
                </p>
              </div>
              <div>
                <h2>Language:</h2>
                <select
                  name="language"
                  required
                  className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                >
                  <option value="" disabled selected>
                    Select your language
                  </option>
                  <option value="indonesia">Indonesia</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="chinese">Chinese</option>
                </select>
                <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                  Please select your language.
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-pink-500 text-lg font-medium rounded-lg py-5 px-14 text-white transition hover:bg-primary-strong"
                  >
                    Submit Now
                  </button>

                  <div id="result" className="mt-3 text-center"></div>
                </div>
              </div>
            </div>
          </form>

          <div>
            <h2 className="text-xl font-bold">My Email Address</h2>
            <div className="flex items-center">
              {emailIcon}
              <div className="pl-8">
                <h2 className="text-lg">budisanjaya03@gmail.com</h2>
                <h3 className="text-gray-400">1 month ago</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
