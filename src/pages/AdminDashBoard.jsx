import { Outlet, useLocation } from "react-router-dom";
import AdminNav from "../components/AdminNav";

const pageTitles = {
  messages: "Messages",
  "add-project": "Add Project",
  "edit-project": "Edit Projects",
};

const AdminDashBoard = () => {
  const location = useLocation();
  const segment = location.pathname.split("/").pop();
  const title = pageTitles[segment] || "Dashboard";
  const isRoot = segment === "admin-dashboard";

  return (
    <div className="min-h-screen bg-[#111812] text-light flex">
      <AdminNav />

      {/* Main content */}
      <main className="flex-1 lg:ml-16 pb-20 lg:pb-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-[#111812]/90 backdrop-blur border-b border-gray-700/40 px-6 md:px-10 py-4 flex items-center gap-3">
          <div className="w-1.5 h-5 bg-accent rounded-full" />
          <h1 className="!text-light font-semibold text-fluid-h3">{title}</h1>
        </header>

        <div className="px-6 md:px-10 py-8">
          {isRoot ? (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8 text-accent"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l80-75.47,80,75.47Z" />
                </svg>
              </div>
              <p className="text-gray-400 text-fluid-p">
                Select a section from the sidebar to get started
              </p>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashBoard;
