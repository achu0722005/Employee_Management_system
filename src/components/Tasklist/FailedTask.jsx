import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full bg-red-500 w-[300px] rounded-xl p-5">
        <div className="flex flex-row justify-between">
          <h3 className="bg-red-200 px-3 py-1 rounded text-sm  items-center text-white">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
        <p className="text-sm mt-2">{data.taskDescription}</p>
        <div className=' mt-4 '>
            <button className='w-full bg-red-800 py-1 rounded'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask