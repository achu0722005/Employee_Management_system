import React from "react";
import Header from "../others/Header";
import TaskNumber from "../others/TaskNumber";
import Tasklist from "../Tasklist/Tasklist";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen flex flex-col text-white">
      <Header data={data} />
      <TaskNumber data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default EmployeeDashboard;
