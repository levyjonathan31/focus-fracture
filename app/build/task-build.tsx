"use client";
import { title } from "process";
import React, { FC, useState } from "react";

const TaskInput: FC<{
  label: string;
  kind: string;
  data: string;
  setFunction: React.Dispatch<React.SetStateAction<string>>;
}> = ({ label, kind, data, setFunction }) => {
  console.log(title);
  return (
    <div className="flex flex-grow flex-col items-center">
      <label className="m-2">{label}</label>
      <input
        size={17}
        type={kind}
        className="mb-8 resize-none rounded-md bg-gray-700 text-center"
        name="title"
        value={data}
        onChange={(e) => setFunction(e.target.value)}
        required
      />
    </div>
  );
};

const TaskForm: FC = () => {
  const [name, setName] = useState("");
  const [shard1, setShard1] = useState("");
  const [shard2, setShard2] = useState("");
  const [shard3, setShard3] = useState("");
  const [date, setDate] = useState("");

  function onSubmit(event: React.FormEvent) {
    console.log(name);
    console.log(shard1);
    console.log(shard2);
    console.log(shard3);
    console.log(date);
  }
  return (
    <form
      method="post"
      noValidate
      onSubmit={onSubmit}
      className="text-center text-2xl"
    >
      <TaskInput label="Title" kind="text" data={name} setFunction={setName} />
      <div className="flex">
        <TaskInput
          label="Shard"
          kind="text"
          data={shard1}
          setFunction={setShard1}
        />
        <TaskInput
          label="Shard"
          kind="text"
          data={shard2}
          setFunction={setShard2}
        />
        <TaskInput
          label="Shard"
          kind="text"
          data={shard3}
          setFunction={setShard3}
        />
      </div>
      <TaskInput
        label="Target Date"
        kind="date"
        data={date}
        setFunction={setDate}
      />
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
