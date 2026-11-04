import React, { useContext, useState,useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthContext";
const App = () => {
  const [user, setuser] = useState(null);
  const Authdata = useContext(AuthContext);
  useEffect(() => {
    if (Authdata) {
      const loggedinuser = localStorage.getItem('logginuser')
      if(loggedinuser){
        setuser(loggedinuser.role)
      }

    }
  }, [Authdata])
  

  const handlelogin = (email, password) => {
    if ((email == "admin@example.com") & (password == "123")) {
      setuser("admin");
      localStorage.setItem('loggedinuser',JSON.stringify({role:'admin'}))
    } else if (Authdata && Authdata.employees.find((e)=>{ return email == e.email && e.password == password})) {
      setuser("employee");
      localStorage.setItem('loggedinuser',JSON.stringify({role:'employee'}))
    } else {
      alert("Invalid credential");
    }
  };

  

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
