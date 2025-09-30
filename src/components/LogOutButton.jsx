import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const LogOutButton = ({ className }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error.message);
    } else {
      // Redirect to login page after logout
      navigate("/admin-login");
      console.log("Logged out successfully");
    }
  };

  return (
    <button className={className} onClick={handleLogout}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6 lg:size-8 rotate-180"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
      </svg>
    </button>
  );
};

export default LogOutButton;
