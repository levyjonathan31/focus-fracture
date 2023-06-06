import React, { FC } from "react";
const Content: FC = () => {
  return (
    <div className="flex h-screen w-5/6 flex-col items-center justify-center bg-gray-800">
      <div className="h-5/6 w-5/6 border-4 border-purple-900 bg-gray-900">
        <h1 className="border-b-4 border-purple-900 py-4 text-center text-3xl">
          Build Task
        </h1>
      </div>
    </div>
  );
};
export default Content;
