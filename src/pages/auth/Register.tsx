import register_image from "../../assets/login_image.png"

export default function Register() {
  return (
    <>
      <body className="h-screen text-base leading-8 text-gray-700 bg-gray-200 font-normal">
        <div className=" py-32">
          <section className="">
            <div className="w-max bg-white mx-auto shadow rounded-lg">
              <div className="flex p-5">
                <div className="w-1/2 overflow-hidden ml-20 mr-36">
                  <h2 className="mb-8 font-bold">Create Account</h2>
                  <form method="POST" className="w-full" id="login-form">
                    <div className="relative mb-6 border-b-4 last:mb-0">
                      <label htmlFor="name"></label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="focus:outline-none"
                      />
                    </div>
                    <div className="relative mb-6 border-b-4 last:mb-0">
                      <label htmlFor="email"></label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="focus:outline-none"
                      />
                    </div>
                    <div className="relative mb-6 border-b-4 last:mb-0">
                      <label htmlFor="password"></label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="focus:outline-none"
                      />
                    </div>
                    <div className="relative mb-6 last:mb-0 text-center">
                      <input
                        type="submit"
                        name="create"
                        id="create"
                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
                        value="Create"
                      />
                    </div>
                  </form>
                </div>

                <div className="max-w-full h-auto">
                  <img src={register_image} alt="register image" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}
