'use client'
import { Task } from "./task";

export function TaskList() {
    
    const task = {
        "title": "test",
        "description": "test",
        "status": "In Progress",
        "date": "2026-11-02"
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <Task task={task} />
        </div>
    );
}