import { getLocalStorage } from "../utils/localStorage";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
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
