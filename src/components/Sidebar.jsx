import React from "react";

const Sidebar = () => {
  return (
    <aside className=" w-64 h-screen  bg-slate-400 text-white flex flex-col rounded-br-xl">
      <div className="p-12">
        <h1 className="text-3xl font-bold">Data Axios</h1>
      </div>
      <nav className="flex flex-col gap-4 px-4">
        <a
          href="#"
          className="hover:bg-gray-700 px-4 py-2 rounded-md transition">
          Dashboard
        </a>
        <a
          href="#"
          className="hover:bg-gray-700 px-4 py-2 rounded-md transition">
          Data
        </a>
        <a
          href="#"
          className="hover:bg-gray-700 px-4 py-2 rounded-md transition">
          Settings
        </a>
        <a
          href="#"
          className="hover:bg-gray-700 px-4 py-2 rounded-md transition">
          Logout
        </a>
        
      </nav>
    </aside>
  );
};

export default Sidebar;
