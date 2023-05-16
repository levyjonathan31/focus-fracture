import React, { FC } from "react";
import jsonData from "../app/data.json";

interface CardProps {
  jsonData: {
    task: {
      title: string;
      description: string;
      date: string;
    }[];
  };
}

const Card: FC<CardProps> = ({ jsonData }) => {
  const { task } = jsonData;
  const { title, description, date } = task[0];

  return (
    <div className="flex h-5/6 w-2/3 flex-col items-center bg-gray-600 p-4">
      <h1 className="p-5 text-6xl">{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
};

const Task: FC = () => {
  return (
    <div className="flex min-h-screen grow items-center justify-center bg-gray-500">
      <Card jsonData={jsonData} />
    </div>
  );
};

export default Task;
