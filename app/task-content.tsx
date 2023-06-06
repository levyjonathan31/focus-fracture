import React, { FC } from "react";
const Task: FC<{ task: string }> = ({ task }) => {
  return (
    <div className="h-3/4 w-1/2 border-4 border-purple-900 bg-gray-900">
      <h1 className="my-4 text-center text-3xl">{task}</h1>
      <p className="border-t-4 border-purple-900 p-2 text-center">{task} </p>
    </div>
  );
};
const Content: FC = () => {
  return (
    <div className="flex w-5/6 items-center justify-center bg-gray-800">
      <Task task="drivin" />
    </div>
  );
};
export default Content;
