"use client";
import axios from "axios";
import React, { FC, useState } from "react";

const Content: FC = () => {
  const userID = "1";
  const [dump, setDump] = useState("");
  function onSubmit() {
    axios.post("/api/braindump", { userID, dump });
  }
  return (
    <div className="flex h-screen w-5/6 items-center justify-center break-words bg-gray-800">
      <div className="flex h-5/6 w-5/6 flex-col border-4 border-purple-900 bg-gray-900">
        <h1 className="flex h-1/6 items-center justify-center border-b-4 border-purple-900 py-4 text-5xl">
          Brain Dump
        </h1>
        <form className="text-center">
          <textarea
            id="message"
            rows={22}
            className="text-md block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder={`Write your thoughts here.
Separate new thoughts with a blank line.`}
            value={dump}
            onChange={(e) => setDump(e.target.value)}
          ></textarea>
          <button onClick={onSubmit}>Dump</button>
        </form>
      </div>
    </div>
  );
};
export default Content;
