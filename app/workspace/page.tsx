import Sidebar from "../sidebar";
import Task from "../task";
export default function Workspace() {
  return (
    <div>
      <label className="justify-center" htmlFor="fname">
        Workspace
      </label>
      <input type="text" id="fname" name="fname" className="text-black"></input>
    </div>
  );
}
