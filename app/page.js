import { Menu } from "./components/menu";
import { TaskList } from "./components/tasklist";

export default function App() {

  const tasks = [{
    "id": 1,
    "title": "test",
    "description": "test",
    "status": "In Progress",
    "date": "2026-11-02"
  },
  {
    "id": 2,
    "title": "test2",
    "description": "test2",
    "status": "completed",
    "date": "2026-11-02"
  }]

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
        <TaskList tasks={tasks} />
      </div>
    </div>
  )
}