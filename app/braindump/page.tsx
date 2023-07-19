"use client";
import axios from "axios";
import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
export default function Home() {
  const userID = "1";
  const [dump, setDump] = useState("");
  function onSubmit() {
    axios.post("/api/braindump", { userID, dump });
  }
  return (
    <>
      <h1 className="pt-4 text-center text-3xl font-bold text-white">
        Brain Dump
      </h1>
      <div className="grid w-full gap-2 p-4">
        <Textarea
          className="bg-wh min-h-[500px] resize-none bg-slate-300"
          placeholder={`What's on your mind?
Separate thoughts with a new line.`}
          onChange={(e) => setDump(e.target.value)}
        />
        <Button onClick={onSubmit}>Dump</Button>
      </div>
    </>
  );
}
