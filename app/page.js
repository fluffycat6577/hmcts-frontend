import { Menu } from "./components/menu";
import { TaskList } from "./components/tasklist";

export default function App() {
  return (
    <div className="flex flex-row items-center justify-evenly min-h-screen h-full">
      <div className="relative items-center justify-center">
        <Menu />
      </div>
      <div className="">
        <TaskList />
      </div>
    </div>
  )
}