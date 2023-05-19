import React, { FC } from "react";

interface ItemEntryProps {
  title: string;
}
const ItemEntry: FC<ItemEntryProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor="fname">{title}</label>
      <input type="text" id="fname" name="fname" className="text-black"></input>
    </div>
  );
};
const TaskEntry: FC = () => {
  return (
    <div className="flex flex-col">
      <ItemEntry title="Title" />
      <ItemEntry title="Description" />
    </div>
  );
};

export default TaskEntry;
