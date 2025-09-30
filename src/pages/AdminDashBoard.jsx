import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import LogOutButton from "../components/LogOutButton";
import { useAdminPageRouting } from "../context/AdminPageRoutingContext";

const AdminDashBoard = () => {
  const { activeLink } = useAdminPageRouting();
  return (
    <div className="relative h-full md:h-screen">
      <LogOutButton className="lg:hidden bg-dark p-2 text-light hover:brightness-50 active:scale-95 duration-300 rounded-full absolute top-5 right-5" />

      <section className="lg:ml-20 border-l-2 border-gray-400/70 w-full lg:w-1/2">
        {activeLink == "" ? <div className="h-[80vh] w-full text-fluid-h1 flex items-center justify-center">Welcome Back</div> : <Outlet />}
      </section>

      <AdminNav />
    </div>
  );
};

export default AdminDashBoard;
