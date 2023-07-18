"use client";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
export default function Home() {
  const [responseData, setResponseData] = useState("");
  useEffect(() => {
    axios
      .get("/api/braindump")
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="flex h-screen w-5/6 items-center justify-center break-words bg-gray-800">
      <div className="flex h-5/6 w-5/6 flex-col border-4 border-purple-900 bg-gray-900">
        <h1 className="flex h-1/6 items-center justify-center border-b-4 border-purple-900 py-4 text-5xl">
          Refine
        </h1>
        <p>{responseData}</p>
      </div>
    </div>
  );
}
