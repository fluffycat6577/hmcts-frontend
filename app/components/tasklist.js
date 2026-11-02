'use client'

import { Task } from "./task";

export function TaskList({tasks}) {

    return(
        <div className="flex flex-col items-center justify-center">
            <ul className="list-none">
                {tasks.map(task => (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
}