'use client'

import { deleteTask } from "../api/_internal/actions";
import { useRouter } from "next/navigation";

function UpdateStatusButton() {
    return (
        <button type="submit" className="p-2 border ml-2 m-4"
            onClick={() => console.log("It does nothing")}>
                Update Status
            </button>
    );
}

function DeleteTaskButton({taskId, refetch}) {
    
    const router = useRouter();
    
    async function handleDelete() {
        try {
            const confirmed = window.confirm(
                "Are you sure you wish to delete this task? This action cannot be undone."
            );

            if (!confirmed) {
                return;
            }

            const result = await deleteTask(taskId);
            refetch();
            router.refresh();
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <button id={taskId} type="submit" className="border rounded m-4 p-2 bg-red-200 hover:bg-red-400" onClick={handleDelete}>Delete Task</button>
    );
}

export function Task({task, refetch}) {
    return (
        <div className="justify-start border m-4 p-2 w-full">
            <h1 className="border-b font-bold text-2xl">{task.title}</h1>
            <div className="flex flex-row">
                <h2 className="pt-2 pr-2 underline">ID: </h2>
                <p className="pt-2">{task.id}</p>
            </div>
            <h2 className="pt-2 underline">Description:</h2>
            <p className="pt-2">{task.description}</p>
            <h2 className="pt-2 underline">Status:</h2>
            <p>{task.status}</p>
            <h2 className="pt-2 underline">Due Date:</h2>
            <p>{task.dueDate}</p>
            <div className="flex flex-row justify-left items-left">
                <UpdateStatusButton />
                <DeleteTaskButton taskId={task.id} refetch={refetch} />
            </div>
        </div>
    );
}