import React, { FC } from "react";
const Button: FC<{ title: string }> = ({ title }) => {
  return (
    <a
      href="/"
      className="mt-4 w-3/5 rounded-md bg-gray-800 p-4 text-center text-white"
    >
      {title}
    </a>
  );
};
const Sidebar: FC = () => {
  return (
    <div className="flex min-h-screen w-1/6 flex-col items-center break-words bg-gray-700 text-xl">
      <a
        href="/"
        className="w-full border-b-2 border-black p-4 text-center text-4xl text-purple-500"
      >
        Focus Fracture
      </a>
      <Button title="Workspace" />
      <Button title="Build Task" />
      <div className="grow"></div>
    </div>
  );
};

export default Sidebar;
