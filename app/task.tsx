import React, { FC } from "react";
import jsonData from "../app/data.json";

interface Task {
  title: string;
  description: string;
  date: string;
}

interface CardProps {
  tasks: Task[];
}

const Buttons = () => {
  return (
    <div className="flex">
      <button className="b-4 m-4 bg-green-600 px-12 py-6 text-xl font-bold text-white">
        Accept
      </button>
      <button className="b-4 m-4 bg-red-600 px-12 py-6 text-xl font-bold text-white">
        Decline
      </button>
    </div>
  );
};

const Card: FC<CardProps> = ({ tasks }) => {
  const { title, description, date } = tasks[1];

  return (
    <div className="flex h-5/6 w-2/3 flex-col items-center bg-gray-600 p-4">
      <h1 className="p-5 text-6xl">{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <Buttons />
    </div>
  );
};

const Task: FC = () => {
  const { tasks } = jsonData;
  return (
    <div className="flex min-h-screen grow items-center justify-center bg-gray-500">
      <Card tasks={tasks} />
    </div>
  );
};

export default Task;
