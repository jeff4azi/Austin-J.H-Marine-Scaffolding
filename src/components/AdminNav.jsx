import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import { useAdminPageRouting } from "../context/AdminPageRoutingContext";

const icons = [
  {
    path: "M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128ZM84,140a12,12,0,1,0-12-12A12,12,0,0,0,84,140Zm88,0a12,12,0,1,0-12-12A12,12,0,0,0,172,140Zm60-76V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64ZM40,224h0ZM216,64H40V224l34.77-30A8,8,0,0,1,80,192H216Z",
    url: "messages",
  },
  {
    path: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-32-80a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z",
    url: "add-project",
  },
  {
    path: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z",
    url: "edit-project",
  },
];

const AdminNav = () => {
  const {activeLink, setActiveLink} = useAdminPageRouting();
  const navEl = icons.map((icon) => (
    <Link to={`/admin-dashboard/${icon.url}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        className={`size-6 lg:size-8 ${
          activeLink == icon.url ? "active" : ""
        } text-light hover:text-accent/50 active:scale-110`}
        onClick={() => setActiveLink(icon.url)}
      >
        <path d={icon.path}></path>
      </svg>
    </Link>
  ));

  return (
    <nav className="fixed bottom-3 lg:flex-col lg:items-center lg:top-5 lg:right-auto lg:max-w-auto left-5 lg:left-3 right-5 bg-dark py-3 px-10 lg:px-3 lg:py-5 lg:gap-5 rounded-full flex justify-between lg:justify-start max-w-2xl mx-auto">
      {navEl}
      <LogOutButton className="hidden lg:block bg-white p-2 text-dark hover:brightness-50 active:scale-95 duration-300 rounded-full absolute bottom-5" />
    </nav>
  );
};

export default AdminNav;
