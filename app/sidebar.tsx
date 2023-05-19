import React, { FC } from "react";

interface ButtonProps {
  text: string;
  addr: string;
}
const Button: FC<ButtonProps> = ({ text, addr }) => {
  return (
    <a
      href={addr}
      className="b-4 m-4 w-2/3 bg-gray-600 px-12 py-6 text-xl font-bold text-white"
    >
      {text}
    </a>
  );
};

const Sidebar: FC = () => {
  return (
    <div className="flex min-h-screen w-1/6 flex-col items-center bg-gray-700">
      <Button text="Workspace" addr="/workspace" />
      <Button text="Build Task" addr="/buildtask" />
      <Button text="Statistics" addr="/stats" />
    </div>
  );
};

export default Sidebar;
