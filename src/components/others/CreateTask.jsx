import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-7 bg-[#1c1c1c] mt-7 rounded ">
        <form
          action=""
          className="text-white flex flex-wrap w-full  items-start  justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input className="text-sm border-[1px] border-gray-400 mb-4 py-1 px-2 w-4/5 rounded outline bg-transparent " type="text" name="" id="" placeholder="System Design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input className="text-sm border-[1px] border-gray-400 mb-4 text-gray-400 [&::-webkit-calendar-picker-indicator]:invert-[0.5] py-1 px-2 w-4/5 rounded outline bg-transparent " type="date" name="" id="" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input className="text-sm border-[1px] border-gray-400 mb-4 py-1 px-2 w-4/5 rounded outline bg-transparent " type="text" name="" id="" placeholder="Asign to" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm border-[1px] border-gray-400 mb-4 py-1 px-2 w-4/5 rounded outline bg-transparent "
                type="text"
                name=""
                id=""
                placeholder="design/dev/.."
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea rows= {6} className="bg-gray-500 border border-gray-700 focus:outline-none focus:border-green-500 text-white placeholder-gray-400 w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent borrder-[1px] border-gray-400" name="" id=""></textarea>
            <button className="bg-emerald-500 hover:bg-emerald-500 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask