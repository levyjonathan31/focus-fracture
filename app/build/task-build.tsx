"use client";
import React, { FC, useState } from "react";
const TaskForm: FC = () => {
  const [title, setTitle] = useState("");
  const [shard1, setShard1] = useState("");
  const [shard2, setShard2] = useState("");
  const [shard3, setShard3] = useState("");
  function onSubmit() {
    console.log("onSubmit");
  }
  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex h-1/2 flex-col items-center text-center text-2xl"
    >
      <label className="">Title</label>
      <input
        type="text"
        className="m-2 w-1/2 rounded-md bg-purple-900 text-center"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label className="mt-4">Shard</label>
      <input
        type="text"
        className="m-2 w-1/2 rounded-md bg-purple-900 text-center"
        name="shard1"
        value={shard1}
        onChange={(e) => setShard1(e.target.value)}
        required
      />
      <label className="">Shard</label>
      <input
        type="text"
        className="m-2 w-1/2 rounded-md bg-purple-900 text-center"
        name="shard2"
        value={shard2}
        onChange={(e) => setShard2(e.target.value)}
        required
      />
      <label className="">Shard</label>
      <input
        type="text"
        className="m-2 w-1/2 rounded-md bg-purple-900 px-2 text-center"
        name="shard3"
        value={shard3}
        onChange={(e) => setShard3(e.target.value)}
        required
      />
    </form>
  );
};
const Content: FC = () => {
  return (
    <div className="flex h-screen w-5/6 items-center justify-center bg-gray-800">
      <div className="h-5/6 w-5/6 border-4 border-purple-900 bg-gray-900">
        <h1 className="border-b-4 border-purple-900 py-4 text-center text-5xl">
          Build Task
        </h1>
        <TaskForm />
        <div className="flex-grow"></div>
        <div className="flex justify-center">
          <button className="mt-4 w-1/6 items-center rounded-md bg-gray-800 p-4 text-center">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
export default Content;
