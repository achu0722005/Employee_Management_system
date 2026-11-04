import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
