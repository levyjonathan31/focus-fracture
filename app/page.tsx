import Sidebar from "./sidebar";
import Task from "./task";
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Task />
    </div>
  );
}
