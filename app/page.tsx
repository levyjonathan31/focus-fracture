import Sidebar from "./sidebar";
import Content from "./content";
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
}
