import { Menu } from "./components/menu";
import { TaskList } from "./components/tasklist";

export default function App() {
  return (
    <div className="flex flex-row items-center justify-evenly min-h-screen h-full">
      <div className="flex flex-col items-center justify-center min-h-screen w-1/2 h-full">
        <div className="absolute top-20">
          <h1 className="font-bold underline text-4xl">HMCTS Test App</h1>
        </div>
        <div className="">
          <Menu />
        </div>
      </div>
      <div className="w-1/2">
        <TaskList />
      </div>
    </div>
  )
}