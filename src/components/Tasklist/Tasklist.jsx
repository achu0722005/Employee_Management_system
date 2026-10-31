import React from "react";

const Tasklist = () => {
  return (
    <div
      id="tasklist"
      className="scrollbar-none h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap  py-5 w-full mt-10 "
    >
      <div className=" flex-shrink-0 h-full bg-red-400 w-[300px] rounded-xl p-5">
        <div className="flex flex-row justify-between">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm  items-center text-white">
            High
          </h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white    ">code today</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste, est ullam laboriosam sit explicabo?</p>
      </div>
    </div>
  );
};

export default Tasklist;
