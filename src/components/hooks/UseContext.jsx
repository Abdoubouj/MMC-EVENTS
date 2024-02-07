import { createContext, useState } from "react";

export const UseContext = createContext();

export const UseContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  function setIsAdminToggle(value) {
    setIsAdmin(value);
  }

  return (
    <UseContext.Provider value={{ isAdmin, setIsAdminToggle }}>
      {children}
    </UseContext.Provider>
  );
};
