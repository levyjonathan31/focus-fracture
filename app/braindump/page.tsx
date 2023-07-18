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
    <div className="theme-zinc min-h-screen">
      <h1 className="text-center text-3xl font-bold text-white">Brain Dump</h1>
      <div className="grid w-full gap-2">
        <Textarea
          className="resize-none bg-slate-800 text-white"
          placeholder={`What's on your mind?
Separate new thoughts with a new line.`}
          onChange={(e) => setDump(e.target.value)}
        />
        <Button onClick={onSubmit}>Send message</Button>
      </div>
    </div>
  );
}
