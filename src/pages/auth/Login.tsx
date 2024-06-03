import { Link, useNavigate } from "react-router-dom";
import login_image from "../../assets/login_image.png"

export default function Login() {
    let navigate = useNavigate()
  return (
    <>
      <body className="h-screen text-base leading-8 text-gray-700 font-normal">
        <div className=" py-32">
          <section className="">
            <div className="w-max bg-[#EEF4FA] mx-auto shadow rounded-3xl">
              <div className="flex p-5">
                <div className="w-96 h-auto self-center">
                    <img src={login_image} alt="Login Image" />
                </div>

                <div className="w-1/2 overflow-hidden ml-20 mr-36">
                  <h2 className="text-3xl font-bold">Login now</h2>
                  <h2 className="mb-8">Hi, Welcome back👋</h2>
                  <form method="POST" className="w-full" id="login-form">
                    <div className="relative mb-6 border-b-4 last:mb-0">
                      <label htmlFor="your_nik"></label>
                      <input
                        type="text"
                        name="your_nik"
                        id="your_nik"
                        placeholder="Your NIK"
                        className="focus:outline-none bg-transparent"
                      />
                    </div>
                    <div className="relative mb-6 border-b-4 last:mb-0">
                      <label htmlFor="your_password"></label>
                      <input
                        type="text"
                        name="your_password"
                        id="your_password"
                        placeholder="Your Password"
                        className="focus:outline-none bg-transparent"
                      />
                    </div>
                    <div className="relative mb-6 flex justify-between last:mb-0">
                      <div className="text-left">
                        <input
                          type="checkbox"
                          name="remeber_me"
                          id="remember_me"
                        />
                        <label htmlFor="remeber_me">Remember me</label>
                      </div>
                      <div className="text-right">
                        <a
                          href="#"
                          className="text-blue-500 hover:text-[#474BCA]"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <div className="relative mb-6 last:mb-0 text-center">
                      <input
                        type="submit"
                        name="signin"
                        id="signin"
                        className="inline-block bg-[#474BCA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 w-full"
                        value="Login"
                        onClick={() => navigate("/dashboard")}
                      />

                      {/* <Link to={"/dashboard"}></Link> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}
