"use client";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import CardForm from "@/components/ui/cardForm";
export default function Home() {
  const [responseData, setResponseData] = useState("");
  useEffect(() => {
    axios
      .get("/api/braindump")
      .then((res) => {
        setResponseData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1 className="pt-4 text-center text-3xl font-bold text-white">Refine</h1>
      <div className="flex flex-col items-center pt-20">
        <CardForm RefineInput={responseData} />
      </div>
    </>
  );
}
