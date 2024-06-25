import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/layouts/Dashboard";
import Schedule from "../pages/layouts/Schedule";
import Grade from "../pages/layouts/Grade";
import Setting from "../pages/layouts/Setting";
import Sharing from "../pages/layouts/Sharing";
import SubModule from "../pages/layouts/SubModul";

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/course/:courseId/*" element={<SubModule />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/sharing" element={<Sharing />} />
        </Routes>
      </div>
    </div>
  );
};