import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [allListing, setAllListing] = useState([]);
  const [listing, setListing] = useState([]);
  const [search, setSearch] = useState("");

  const value = {
    token,
    setToken,
    isAuth,
    setIsAuth,
    setAllListing,
    allListing,
    listing,
    setListing,
    search,
    setSearch,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
