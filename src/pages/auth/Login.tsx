import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login_image from "../../assets/login_image.png";

interface Errors {
  nik?: string;
  password?: string;
}

export default function Login() {
  let navigate = useNavigate();
  const [nik, setNik] = useState<string>("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): Errors => {
    let formErrors: Errors = {};
    if (!nik) formErrors.nik = "NIK is required";
    if (isNaN(Number(nik))) formErrors.nik = "NIK must be a number";
    if (!password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      navigate("/dashboard");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center">
            <img
              src={login_image}
              alt="Login Image"
              className="h-24 w-24 mb-4"
            />
          </div>
          <h2 className="text-3xl font-bold text-center">Login Now</h2>
          <p className="text-center mb-8">Hi, Welcome back 👋</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="your_nik" className="block text-gray-700">
                Your NIK
              </label>
              <input
                type="text"
                id="your_nik"
                name="your_nik"
                placeholder="Your NIK"
                className="block w-full px-3 py-2 mt-1 focus:outline-none border-b-2 border-gray-300"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
              />
              {errors.nik && <p className="text-red-500 mt-1">{errors.nik}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="your_password" className="block text-gray-700">
                Your Password
              </label>
              <input
                type="password"
                id="your_password"
                name="your_password"
                placeholder="Your Password"
                className="block w-full px-3 py-2 mt-1 focus:outline-none border-b-2 border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-left">
                <input
                  type="checkbox"
                  id="remember_me"
                  name="remember_me"
                  className="mr-1"
                />
                <label htmlFor="remember_me" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-right">
                <Link to="#" className="text-blue-500 hover:text-blue-700">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="submit"
                className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
