import { createContext, useState } from "react";

export const UseContext = createContext();

export const UseContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userRole, setUserRole] = useState("Test");

  function setIsAdminToggle(value, role) {
    setIsAdmin(value);
    setUserRole(role);
  }

  return (
    <UseContext.Provider value={{ isAdmin, userRole, setIsAdminToggle }}>
      {children}
    </UseContext.Provider>
  );
};
