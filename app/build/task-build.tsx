"use client";
import React, { FC, useState } from "react";
const Shard: FC<{ label: string }> = ({ label }) => {
  const [title, setTitle] = useState("");
  return (
    <div className="flex flex-grow flex-col items-center">
      <label className="m-2">{label}</label>
      <input
        size={25}
        type="text"
        className="mb-8 resize-none rounded-md bg-gray-700 text-center"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
  );
};

const TaskForm: FC = () => {
  function onSubmit(event: React.FormEvent) {
    console.log("onSubmit");
  }
  return (
    <form noValidate onSubmit={onSubmit} className="text-center text-2xl">
      <Shard label="Title" />
      <div className="flex">
        <Shard label="Shard" />
        <Shard label="Shard" />
        <Shard label="Shard" />
      </div>
      <button
        type="submit"
        className="mb-4 w-1/6 rounded-md bg-gray-800 p-4 text-center"
      >
        Create
      </button>
    </form>
  );
};
const Content: FC = () => {
  return (
    <div className="flex h-screen w-5/6 items-center justify-center break-words bg-gray-800">
      <div className="flex h-5/6 w-5/6 flex-col border-4 border-purple-900 bg-gray-900">
        <h1 className="flex h-1/6 items-center justify-center border-b-4 border-purple-900 py-4 text-5xl">
          Build Task
        </h1>
        <TaskForm />
      </div>
    </div>
  );
};
export default Content;
