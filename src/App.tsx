import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/layouts/Dashboard";
import Schedule from "./pages/layouts/Schedule";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          {/* <Route path="/course">
            <Route path=":" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
