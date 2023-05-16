import React, { FC } from "react";

interface ButtonProps {
  text: string;
}
const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="b-4 m-4 bg-gray-600 px-12 py-6 text-xl font-bold text-white">
      {text}
    </button>
  );
};

const Sidebar: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-700">
      <Button text="Build Task" />
      <Button text="Statistics" />
    </div>
  );
};

export default Sidebar;
