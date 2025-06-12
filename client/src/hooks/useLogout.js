import { useContext } from "react";
import apiRequest from "../utils/apiRequest";
import { AppContext } from "../context/AppContext";

const useLogout = () => {
  const { setIsAuth } = useContext(AppContext);
  const Logout = async () => {
    const res = await apiRequest.post("/api/auth/logout");
    if (res.data.success) {
      setIsAuth("");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("userId");
      window.location.reload();
    }
  };

  return Logout;
};
export default useLogout;
