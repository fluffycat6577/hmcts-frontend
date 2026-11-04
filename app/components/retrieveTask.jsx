'use client'

import { getTaskById } from '../api/_internal/actions';
import { Task } from './task';
import { useState } from 'react';

function TaskSelection({ setTask }) {
    const [taskId, setTaskId] = useState(0);

    async function fetchTask(event) {
        event.preventDefault();

        try {
            const result = await getTaskById(taskId);
            setTask(result);
        } catch (error) {
            console.log(error);
            setTask("Empty");
        }
    }

    return (
        <form className="relative flex flex-col" onSubmit={fetchTask}>
            <div className="flex flex-row items-center justify-center">

                <h1 className="text-2xl">Enter the desired task ID:</h1>

                <input
                id="taskId"
                name="taskId"
                type="number"
                value={taskId}
                onChange={(event) => setTaskId(event.target.value)}
                required
                className="border rounded p-1 ml-4" />

                <button className="border rounded p-2 m-4" type="submit">Submit</button>

            </div>
        </form>
    );
}

function DisplayTask({ task, onDelete }) {

    if (task === null) {
        return (
            <div>

            </div>
        );
    }

    if (task === "Empty") {
        return (
            <div className="flex flex-row item-center justify-center">
                <h1 className="font-bold text-2xl">No task found matching that ID.</h1>
            </div>
        )
    }

    return (
        <Task task={task} refetch={onDelete} />
    );
}

export function TaskView() {
    const [task, setTask] = useState(null);

    // Task is deleted from server, and local state is updated on next fetch
    // So we just reset the state on this page to remove the current task
    const onDelete = () => {
        setTask(null);
    }

    return (
        <div className="relative flex flex-col">
            <TaskSelection setTask={setTask} />
            <DisplayTask task={task} onDelete={onDelete} />
        </div>
    );

}