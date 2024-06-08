import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/layouts/Dashboard";
import Schedule from "./pages/layouts/Schedule";
import Grade from "./pages/layouts/Grade";
import Setting from "./pages/layouts/Setting";
import Sharing from "./pages/layouts/Sharing";
import SubModule from "./pages/layouts/SubModul";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/course">
            <Route path="module" element={<SubModule />} />
          </Route>
          <Route path="/grade" element={<Grade />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/sharing" element={<Sharing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
