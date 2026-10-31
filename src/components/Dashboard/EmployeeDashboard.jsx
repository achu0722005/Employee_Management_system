import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen flex flex-col text-white'>
        <Header/>
    <TaskNumber />
    <Tasklist />
    </div>
  )
}

export default EmployeeDashboard