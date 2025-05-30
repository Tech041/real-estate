import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const value = {
    token,
    setToken,
    isAuth,
    setIsAuth,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
