import React, { FC } from "react";

interface ButtonProps {
  text: string;
}
const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="m-4 rounded border-b-4 border-orange-700 bg-orange-500 px-10 py-4 font-bold text-white hover:border-orange-400 hover:bg-orange-400">
      {text}
    </button>
  );
};

const Sidebar: FC = () => {
  return (
    <div className="flex min-h-screen w-1/6 flex-col items-center bg-yellow-400">
      <Button text="Build Task" />
      <Button text="Statistics" />
    </div>
  );
};

export default Sidebar;
