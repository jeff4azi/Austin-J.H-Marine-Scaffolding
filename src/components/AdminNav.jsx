import { Link, useLocation } from "react-router-dom";
import LogOutButton from "./LogOutButton";

const navItems = [
  {
    label: "Messages",
    url: "messages",
    path: "M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128ZM84,140a12,12,0,1,0-12-12A12,12,0,0,0,84,140Zm88,0a12,12,0,1,0-12-12A12,12,0,0,0,172,140Zm60-76V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64ZM40,224h0ZM216,64H40V224l34.77-30A8,8,0,0,1,80,192H216Z",
  },
  {
    label: "Add Project",
    url: "add-project",
    path: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-32-80a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z",
  },
  {
    label: "Edit Projects",
    url: "edit-project",
    path: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z",
  },
];

const AdminNav = () => {
  const location = useLocation();

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-16 bg-[#0d1410] border-r border-gray-700/50 items-center py-6 gap-2 z-40">
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.url);
          return (
            <Link
              key={item.url}
              to={`/admin-dashboard/${item.url}`}
              title={item.label}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-xl duration-200 ${
                isActive
                  ? "bg-accent/20 text-accent"
                  : "text-gray-400 hover:bg-white/5 hover:text-light"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="size-5"
              >
                <path d={item.path} />
              </svg>
              {/* Tooltip */}
              <span className="absolute left-14 bg-gray-800 text-light text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 duration-200 pointer-events-none">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-accent rounded-r" />
              )}
            </Link>
          );
        })}

        <div className="mt-auto">
          <LogOutButton className="flex items-center justify-center w-10 h-10 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 duration-200" />
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0d1410] border-t border-gray-700/50 flex items-center justify-around px-4 py-3 z-40">
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.url);
          return (
            <Link
              key={item.url}
              to={`/admin-dashboard/${item.url}`}
              className={`flex flex-col items-center gap-1 duration-200 ${
                isActive ? "text-accent" : "text-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="size-5"
              >
                <path d={item.path} />
              </svg>
              <span className="text-[10px]">{item.label}</span>
            </Link>
          );
        })}
        <LogOutButton className="flex flex-col items-center gap-1 text-gray-400 hover:text-red-400 duration-200" />
      </nav>
    </>
  );
};

export default AdminNav;
