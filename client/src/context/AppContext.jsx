import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [userId, setUserId] = useState(sessionStorage.getItem("userId"));
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
    userId,
    setUserId,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
