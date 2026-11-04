import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data}) => {
  
  const logout = () =>{
    localStorage.setItem('loggedinuser','')
    window.location.reload()
  }
  return (
    <div className='flex items-center justify-between text-white'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'> {data.firstname} 🖐️</span></h1>
        <button onClick={logout} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header