import { createContext, useState } from "react";

export const UseContext = createContext();

export const UseContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("User");

  function setIsAuthenticatedToggle(value, role) {
    setIsAuthenticated(value);
    setUserRole(role);
  }

  return (
    <UseContext.Provider
      value={{ isAuthenticated, userRole, setIsAuthenticatedToggle }}
    >
      {children}
    </UseContext.Provider>
  );
};
