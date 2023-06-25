import React, { FC } from "react";
import axios from "axios";
const Task: FC<{ task: string }> = ({ task }) => {
  return (
    <div className="flex h-3/4 w-1/2 flex-col border-4 border-purple-900 bg-gray-900">
      <h1 className="text-center text-4xl">{task}</h1>
      <p className="border-t-4 border-purple-900 p-2 text-center text-xl">
        {task}
      </p>
      <div className="flex-grow"></div>
      <div className="h-1/12 flex justify-center ">
        <button className="mx-4 items-center rounded-md bg-gray-800 p-4 text-center">
          Create
        </button>
        <button className="mx-4 items-center rounded-md bg-gray-800 p-4 text-center">
          Create
        </button>
        <button className="mx-4 items-center rounded-md bg-gray-800 p-4 text-center">
          Create
        </button>
      </div>
    </div>
  );
};
const Content: FC = () => {
  const getShards = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Make a POST request to your backend endpoint
      const response = await axios.get("/api/getShards");

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };
  return (
    <div className="flex w-5/6 items-center justify-center bg-gray-800">
      <Task task="drivin" />
    </div>
  );
};
export default Content;
