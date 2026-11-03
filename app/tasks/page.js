'use client'

import { TaskList } from "../components/tasklist";
import { NavigationButton } from "../components/menu";
import { useTask } from "../hooks/useTask";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const { tasks, loading, refetch } = useTask();

    return (
        <div className="relative flex flex-col ml-10 mt-10">
            <div className="relative flex flex-col">
                <h1 className="font-bold underline text-4xl">Current Tasks</h1>
                <div className="relative flex flex-row">
                    <NavigationButton label="Go Back" onButtonClick={router} route="/" />
                    <button type="submit" className="border rounded p-2 m-4" onClick={refetch}>Update List</button>
                </div>
            </div>
            <TaskList tasks={tasks} />
        </div>
    )
}