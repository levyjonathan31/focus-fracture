import React, { FC } from "react";
const Sidebar: FC = () => {
  return (
    <div className="flex min-h-screen w-1/6 flex-col items-center bg-gray-700 text-xl">
      <a
        href="/"
        className="w-full border-b-2 border-black p-4 text-center text-4xl text-purple-500"
      >
        Focus Fracture
      </a>
      <a
        href="/"
        className="mt-4 w-3/5 rounded-md bg-gray-800 p-4 text-center text-white"
      >
        Workspace
      </a>
      <a
        href="/build"
        className="mt-4 w-3/5 rounded-md bg-gray-800 p-4 text-center text-white"
      >
        Build Task
      </a>
      <div className="grow"></div>
    </div>
  );
};

export default Sidebar;
