"use client";
import axios from "axios";
import React, { FC, useState } from "react";

const TaskInput: FC<{
  label: string;
  kind: string;
  data: string;
  id: string;
  setFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, kind, data, id, setFunction }) => {
  return (
    <div className="flex flex-grow flex-col items-center">
      <label className="m-2">{label}</label>
      <input
        size={17}
        type={kind}
        className="mb-8 resize-none rounded-md bg-gray-700 text-center"
        name={id}
        value={data}
        onChange={(e) => setFunction(e)}
        required
      />
    </div>
  );
};

const TaskForm: FC = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    shard1: "",
    shard2: "",
    shard3: "",
    date: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(formInputs);
    setFormInputs((prevFormInputs) => ({
      ...prevFormInputs,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userTask = {
      userEmail: "jonathanlevy2002@gmail.com",
      formInputs,
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
        kind="text"
        data={formInputs.name}
        id="name"
        setFunction={handleInputChange}
      />
      <div className="flex">
        <TaskInput
          label="Shard"
          kind="text"
          data={formInputs.shard1}
          id="shard1"
          setFunction={handleInputChange}
        />
        <TaskInput
          label="Shard"
          kind="text"
          data={formInputs.shard2}
          id="shard2"
          setFunction={handleInputChange}
        />
        <TaskInput
          label="Shard"
          kind="text"
          data={formInputs.shard3}
          id="shard3"
          setFunction={handleInputChange}
        />
      </div>
      <TaskInput
        label="Target Date"
        kind="date"
        data={formInputs.date}
        id="date"
        setFunction={handleInputChange}
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
