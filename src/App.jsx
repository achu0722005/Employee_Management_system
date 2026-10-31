import React,{useEffect,useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {
  const [user, setuser] = useState(null)
  const handlelogin = (email,password) =>{
    if(email == 'admin@example.com' & password == '123'){
      setuser('admin')
      console.log(user);
      
      
    }else if(email == 'user@example.com' & password == '123'){
      setuser('employee')
      console.log(user);
      
    }
    else{
      alert('Invalid credential')
    }
    
  }
  
  return (
    <>
    {!user ? <Login handlelogin ={handlelogin}/>:''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App