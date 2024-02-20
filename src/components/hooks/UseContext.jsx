import { createContext, useState } from "react";

export const UseContext = createContext();

export const UseContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userRole, setUserRole] = useState("User");
  const [currentUser, setCurrentUser] = useState("F");

  function setIsAuthenticatedToggle(value, role) {
    setIsAuth(value);
    setUserRole(role);
  }

  return (
    <UseContext.Provider
      value={{ currentUser, isAuth, userRole, setIsAuthenticatedToggle }}
    >
      {children}
    </UseContext.Provider>
  );
};
