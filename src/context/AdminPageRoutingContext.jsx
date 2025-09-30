import { createContext, useContext, useState } from "react";

const AdminPageRoutingContext = createContext();

export const AdminPageRoutingProvider = ({children}) => {
  const [activeLink, setActiveLink] = useState("");
  return <AdminPageRoutingContext.Provider value={{activeLink, setActiveLink}}>{children}</AdminPageRoutingContext.Provider>;
};

export const useAdminPageRouting = () => useContext(AdminPageRoutingContext);
