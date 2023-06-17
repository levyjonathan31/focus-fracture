"use client";
import axios from "axios";
import React, { FC, useState } from "react";

const TaskInput: FC<{
  label: string;
  data: string;
  id: string;
  kind: string;
  setFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, data, id, kind, setFunction }) => {
  return (
    <div className="flex flex-grow flex-col items-center">
      <label className="">{label}</label>
      <input
        size={17}
        className="mx-6 mb-4 resize-none rounded-md bg-gray-700 text-center"
        type={kind}
        name={id}
        value={data}
        onChange={(e) => setFunction(e)}
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
  const [formInputs, setFormInputs] = useState({
    name: "",
    shard1: {
      description1: "",
      category1: "",
      measure1: "",
      deadline1: date,
    },
    shard2: {
      description2: "",
      category2: "",
      measure2: "",
      deadline2: date,
    },
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormInputs((prevFormInputs) => ({
      ...prevFormInputs,
      [name]: value,
      shard1: {
        ...prevFormInputs.shard1,
        [name]: value,
      },
      shard2: {
        ...prevFormInputs.shard2,
        [name]: value,
      },
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
        data={formInputs.name}
        id="name"
        kind="text"
        setFunction={handleInputChange}
      />
      <div className="flex justify-center">
        <div className="flex flex-col">
          <TaskInput
            label="Description"
            data={formInputs.shard1.description1}
            id="description1"
            kind="text"
            setFunction={handleInputChange}
          />
          <TaskInput
            label="Category"
            data={formInputs.shard1.category1}
            id="category1"
            kind="text"
            setFunction={handleInputChange}
          />
          <TaskInput
            label="Measure"
            data={formInputs.shard1.measure1}
            id="measure1"
            kind="text"
            setFunction={handleInputChange}
          />
          <TaskInput
            label="Target Date"
            data={formInputs.shard1.deadline1}
            id="deadline1"
            kind="date"
            setFunction={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <TaskInput
            label="Description"
            data={formInputs.shard2.description2}
            id="description2"
            kind="text"
            setFunction={handleInputChange}
          />
          <TaskInput
            label="Category"
            data={formInputs.shard2.category2}
            id="category2"
            kind="text"
            setFunction={handleInputChange}
          />
          <TaskInput
            label="Measure"
            data={formInputs.shard2.measure2}
            id="measure2"
            kind="text"
            setFunction={handleInputChange}
          />
          <TaskInput
            label="Target Date"
            data={formInputs.shard2.deadline2}
            id="deadline2"
            kind="date"
            setFunction={handleInputChange}
          />
        </div>
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
