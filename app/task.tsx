import React, { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  date: string;
}
const Card: FC<CardProps> = ({ title, description, date }) => {
  return (
    <div className="flex h-5/6 w-2/3 flex-col items-center bg-gray-600 p-4">
      <h1 className="p-5 text-6xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const Task: FC = () => {
  return (
    <div className="flex min-h-screen grow items-center justify-center bg-gray-500">
      <Card
        title="Task Title"
        description="Task Description"
        date="Task Date"
      />
    </div>
  );
};

export default Task;
