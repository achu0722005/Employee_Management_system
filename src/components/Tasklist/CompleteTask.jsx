import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full bg-green-300 w-[300px] rounded-xl p-5">
        <div className="flex flex-row justify-between">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm  items-center text-white">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white    ">{data.taskTitle}</h2>
        <p className="text-sm mt-2">{data.taskDescription}</p>
        <div className=' mt-4 '>
            <button className='w-full bg-green-600 py-1 rounded'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask