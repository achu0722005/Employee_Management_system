import React from "react";

const TaskNumber = () => {
  return (
    <div className="flex  border-amber-400 mt-10   justify-between gap-5 ">
      <div className="py-6 px-9 w-[45%] bg-red-300 rounded-xl">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-yellow-300 rounded-xl">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-green-300 rounded-xl">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-violet-300 rounded-xl">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
