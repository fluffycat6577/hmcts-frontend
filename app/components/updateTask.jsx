'use client'

import { getTaskById, updateTask } from "../api/_internal/actions"
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getModifiedFields } from "../utils/getModifiedFields";

function EditForm({task}) {
    //This function is too long, should ideally refactor

    const [originalTask, setOriginalTask] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const router = useRouter();

    useEffect(() => {

        async function initForm() {
            if (!task) {
                return;
            }

            setOriginalTask(task);
            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
            setDate(task.dueDate);
        }

        initForm();
    }, [task]);

    async function handleFormSubmit(event) {
        event.preventDefault();

        if (!originalTask) {
            return;
        }

        // Only send fields that have actually been changed
        // Smaller request body = more efficient
        const updatedTask = getModifiedFields(
            {
                title: originalTask.title,
                description: originalTask.description,
                status: originalTask.status,
                dueDate: originalTask.dueDate
            },
            {
                title: title,
                description: description,
                status: status,
                dueDate: date
            }
        );

        try {
            const response = await updateTask(originalTask.id, JSON.stringify(updatedTask));
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="relative flex flex-col" onSubmit={handleFormSubmit}>

            <div>
                <h1 className="underline"> Please enter the updated details in the fields below:</h1>
            </div>

            <h1 className="font-bold underline text-2xl">Task Name</h1>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required 
                className="border rounded p-2 mb-4"
            />
            
            <h1 className="font-bold underline text-2xl">Description</h1>
            <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="border rounded p-2 mb-4"
            />
            
            <h1 className="font-bold underline text-2xl">Status</h1>
            <select 
                id="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                required
                className="border rounded p-1 mb-4">
                    <option value="Pending">Pending</option>
                    <option value="InProgress">In Progress</option>
                    <option value="Completed">Completed</option>
            </select>

            <h1 className="font-bold underline text-2xl">Due Date</h1>
            <input
                type="datetime-local"
                id="dueDate" 
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
                className="border rounded p-1 mb-4"
            />
            
            <button type="submit" disabled={!originalTask} className="border rounded p-2 m-4 hover:bg-gray-300">Save Changes</button>
            
        </form>
    );
}

export function UpdateTask() {

    const params = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        async function getTask() {
            try {
                const response = await getTaskById(params.id);
                setTask(response);
            } catch (error) {
                console.error(error);
            }
        }

        getTask();
    }, [params.id]);

    if (task === null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    // Guard against trying to load the element with an undefined task
    // (Could occur on initial mounting before useEffect has a chance to run)
    return (
        task && <EditForm task={task} />
    );
}