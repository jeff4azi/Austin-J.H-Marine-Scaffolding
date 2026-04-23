import { Route, Routes } from "react-router-dom";
import { OverlayProvider } from "./context/OverlayContext";
import { Analytics } from "@vercel/analytics/react";

import Landing_Page from "./pages/Landing_Page";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashBoard from "./pages/AdminDashBoard";
import Messages from "./pages/Messages";
import EditProject from "./pages/EditProject";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";
import AllProjects from "./pages/AllProjects";
import { AdminPageRoutingProvider } from "./context/AdminPageRoutingContext";
import { AuthProvider } from "./context/AuthContext";
import { ProjectsProvider } from "./context/ProjectContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <OverlayProvider>
      <AdminPageRoutingProvider>
        <AuthProvider>
          <ProjectsProvider>
            <main className="relative">
              <Routes>
                <Route path="/" element={<Landing_Page />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/admin-login" element={<AdminLoginPage />} />

                <Route
                  path="/admin-dashboard"
                  element={
                    <ProtectedRoute>
                      <AdminDashBoard />
                    </ProtectedRoute>
                  }
                >
                  <Route path="messages" element={<Messages />} />
                  <Route path="add-project" element={<AddProject />} />
                  <Route path="edit-project" element={<EditProject />} />
                </Route>
              </Routes>
            </main>
            <Analytics />
          </ProjectsProvider>
        </AuthProvider>
      </AdminPageRoutingProvider>
    </OverlayProvider>
  );
};

export default App;
