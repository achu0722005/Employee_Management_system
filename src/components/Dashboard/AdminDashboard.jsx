import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import Alltask from "../others/Alltask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 bg-[#050505]  flex flex-col text-white">
      <Header />
      <CreateTask />
      <Alltask />
    </div>
  );
};

export default AdminDashboard;
