import React, { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="flex min-h-screen w-1/6 flex-col items-center bg-gray-700">
      <h1 className="w-full border-b-2 border-black p-4 text-center text-3xl text-purple-500">
        Focus Fracture
      </h1>
      <button className="m-4 w-3/5 rounded-md bg-gray-800 p-4 text-white">
        Start
      </button>
    </div>
  );
};

export default Sidebar;
