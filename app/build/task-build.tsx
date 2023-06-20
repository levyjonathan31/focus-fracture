"use client";
import axios from "axios";
import { on } from "events";
import React, { FC, useState } from "react";

const TaskInput: FC<{
  label: string;
  id: string;
  kind: string;
  setFunction: (id: string, value: string) => void;
}> = ({ label, id, kind, setFunction }) => {
  const [input, setInput] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
    setFunction(id, value);
  };
  return (
    <div className="flex flex-grow flex-col items-center">
      <label className="">{label}</label>
      <input
        size={25}
        className="mx-6 mb-4 resize-none rounded-md bg-gray-700 text-center"
        type={kind}
        name={id}
        value={input}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

const TaskForm: FC = () => {
  const current = new Date();
  const date =
    current.getFullYear() +
    "-" +
    ("0" + (current.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + current.getDate()).slice(-2);
  const [header, setHeader] = useState({
    name: "",
    category: "",
    deadline: date,
  });
  const [shard1, setShard1] = useState({
    description: "",
    measure: "",
  });
  const [shard2, setShard2] = useState({
    description: "",
    measure: "",
  });
  const onHeaderChange = (id: string, value: string) => {
    setHeader({ ...header, [id]: value });
  };
  const onShard1Change = (id: string, value: string) => {
    setShard1({ ...shard1, [id]: value });
  };
  const onShard2Change = (id: string, value: string) => {
    setShard2({ ...shard2, [id]: value });
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userTask = {
      userEmail: "testUser",
      header,
      shard1,
      shard2,
    };
    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post("/api/sendTask", userTask);

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };

  return (
    <form
      method="post"
      noValidate
      onSubmit={onSubmit}
      className="text-center text-2xl"
    >
      <TaskInput
        label="Title"
        id="name"
        kind="text"
        setFunction={onHeaderChange}
      />
      <div className="flex justify-center">
        <div className="flex flex-col">
          <TaskInput
            label="Shard"
            id="description"
            kind="text"
            setFunction={onShard1Change}
          />
          <TaskInput
            label="Measure"
            id="measure"
            kind="text"
            setFunction={onShard1Change}
          />
        </div>
        <div className="flex flex-col">
          <TaskInput
            label="Shard"
            id="description"
            kind="text"
            setFunction={onShard2Change}
          />
          <TaskInput
            label="Measure"
            id="measure"
            kind="text"
            setFunction={onShard2Change}
          />
        </div>
      </div>
      <TaskInput
        label="Category"
        id="measure2"
        kind="text"
        setFunction={onHeaderChange}
      />
      <TaskInput
        label="Target Date"
        id="deadline1"
        kind="date"
        setFunction={onHeaderChange}
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
