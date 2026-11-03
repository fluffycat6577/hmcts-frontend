'use client';

import { Menu } from "./menu";
import { TaskList } from "./tasklist";
import { useTask } from "../hooks/useTask";

export function TaskApp() {
    
    const { tasks, loading, refetch } = useTask();

    return (
        <div className="flex flex-row justify-evenly">
            <div className="sticky flex flex-col items-center w-2/5 mt-20">
                <div className="mb-10">
                    <h1 className="font-bold underline text-4xl">HMCTS Test App</h1>
                </div>
                <div className="">
                    <Menu onRefetch={refetch} />
                </div>
            </div>
            <div className="w-3/5">
                <TaskList tasks={tasks} />
            </div>
        </div>
    )
}