import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [allListing, setAllListing] = useState([]);

  const value = {
    token,
    setToken,
    isAuth,
    setIsAuth,
    setAllListing,
    allListing,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
