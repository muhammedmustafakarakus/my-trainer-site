import { Routes, Route } from 'react-router-dom';
import AdminLayout from "./components/AdminLayout";
import AdminAboutPage from "./pages/admin/AdminAboutPage";
import AdminContactPage from "./pages/admin/AdminContactPage/index.jsx";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminLessonsPage from "./pages/admin/AdminLessonsPage.jsx";
import AdminStudentCoachPage from "./pages/admin/AdminStudentCoachPage/index.jsx";

function AdminRoutes() {
  return (
    <Routes>
      {/* AdminLayout tüm bu alt route'ları saracak */}
      <Route element={<AdminLayout />}> 
        <Route index element={<AdminHomePage />} /> {/* /admin path'i için */}
        <Route path="about" element={<AdminAboutPage />} /> {/* /admin/about path'i için */}
        <Route path="lessons" element={<AdminLessonsPage />} /> 
        <Route path="student-coach" element={<AdminStudentCoachPage />} /> 
        <Route path="contact" element={<AdminContactPage />} /> 
      </Route>
    </Routes>
  );
}

export default AdminRoutes;