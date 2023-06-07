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
        className="m-2 w-1/2 rounded-md bg-purple-900 px-2"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label className="">Shard 1</label>
      <input
        type="text"
        className="m-2 w-1/2 rounded-md bg-purple-900 px-2"
        name="objective1"
        value={shard1}
        onChange={(e) => setShard1(e.target.value)}
        required
      />
      <label className="">Shard 2</label>
      <input
        type="text"
        className="m-2 w-1/2 rounded-md bg-purple-900 px-2"
        name="objective2"
        value={shard2}
        onChange={(e) => setShard2(e.target.value)}
        required
      />
      <label className="">Shard 3</label>
      <input
        type="text"
        className="m-2 w-1/2 rounded-md bg-purple-900 px-2"
        name="objective3"
        value={shard3}
        onChange={(e) => setShard3(e.target.value)}
        required
      />
    </form>
  );
};
const Content: FC = () => {
  return (
    <div className="flex h-screen w-5/6 flex-col items-center justify-center bg-gray-800">
      <div className="h-5/6 w-5/6 border-4 border-purple-900 bg-gray-900">
        <h1 className="border-b-4 border-purple-900 py-4 text-center text-5xl">
          Build Task
        </h1>
        <TaskForm />
      </div>
    </div>
  );
};
export default Content;
