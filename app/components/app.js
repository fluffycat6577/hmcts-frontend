'use client';

import { Menu } from "./menu";
import { TaskList } from "./tasklist";
import { useTask } from "../hooks/useTask";

export function TaskApp() {
    
    const { tasks, loading, refetch, updateNoRefetch, deleteFromState } = useTask();

    return (
        <div className="flex flex-row items-center justify-evenly min-h-screen h-full">
        <div className="flex flex-col items-center justify-center min-h-screen w-1/2 h-full">
            <div className="absolute top-20">
            <h1 className="font-bold underline text-4xl">HMCTS Test App</h1>
            </div>
            <div className="">
            <Menu onRefetch={refetch}/>
            </div>
        </div>
        <div className="w-1/2">
            <TaskList tasks={tasks} />
        </div>
        </div>
    )
}