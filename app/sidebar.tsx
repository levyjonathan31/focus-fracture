import React, { FC } from "react";

interface ButtonProps {
  text: string;
  path: string;
}
const Button: FC<ButtonProps> = ({ text, path }) => {
  return (
    <button className="m-4 rounded border-b-4 border-blue-700 bg-blue-500 px-10 py-4 font-bold text-white hover:border-blue-500 hover:bg-blue-400">
      {text}
    </button>
  );
};

const Sidebar: FC = () => {
  return (
    <div className="fixed flex min-h-screen w-1/6 flex-col items-center bg-green-500">
      <Button text="Build Task" path="/" />
      <Button text="Statistics" path="/" />
    </div>
  );
};

export default Sidebar;
