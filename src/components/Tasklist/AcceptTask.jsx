import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
     <div className=" flex-shrink-0 h-full bg-yellow-400 w-[300px] rounded-xl p-5">
        <div className="flex flex-row justify-between">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm  items-center text-white">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
        <p className="text-sm mt-2">{data.taskDescription}</p>
        <div className='flex justify-between mt-4 '>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark As completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark As Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask