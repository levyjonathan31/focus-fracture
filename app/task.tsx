"use client";
import React, { FC, useState } from "react";
import jsonData from "../app/data.json";
interface Task {
  title: string;
  description: string;
  date: string;
}

interface CardProps {
  tasks: Task[];
}

interface ButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const Buttons: FC<ButtonsProps> = ({ onIncrement, onDecrement }) => {
  return (
    <div className="flex">
      <button
        onClick={onDecrement}
        className="b-4 m-4 bg-red-400 px-12 py-6 text-xl font-bold text-white"
      >
        Previous
      </button>
      <button
        onClick={onIncrement}
        className="b-4 m-4 bg-green-400 px-12 py-6 text-xl font-bold text-white"
      >
        Next
      </button>
    </div>
  );
};

const Card: FC<CardProps> = ({ tasks }) => {
  const [count, setCount] = useState(0);
  const { title, description, date } = tasks[count];

  const increment = () => {
    if (count === tasks.length - 1) {
      setCount(0);
      return;
    }
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      setCount(tasks.length - 1);
      return;
    }
    setCount((count) => count - 1);
  };

  return (
    <div className="flex h-5/6 w-2/3 flex-col items-center bg-gray-600 p-4">
      <h1 className="p-5 text-6xl">{title}</h1>
      <p>{date}</p>
      <p className="m-5 text-center text-3xl">{description}</p>

      <div className="flex-grow" />
      <div className="mt-auto">
        <Buttons onIncrement={increment} onDecrement={decrement} />
      </div>
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
