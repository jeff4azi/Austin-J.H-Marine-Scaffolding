// OverlayContext.jsx
import { createContext, useState, useContext } from "react";

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => useContext(OverlayContext);