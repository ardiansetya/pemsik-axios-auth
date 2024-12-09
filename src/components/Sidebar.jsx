import React from "react";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white flex flex-col justify-between">
  
      <div className="p-4">
        <h1 className="text-2xl font-bold">Data Axios</h1>
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

      <div className="p-4 text-sm text-gray-400">
        &copy;2024 Ardian. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
