'use client'

import { createTask } from "../api/_internal/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CreateTaskForm() {

    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [dateTime, setDateTime] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = JSON.stringify({
            title: title,
            description: description,
            status: selectedStatus,
            dueDate: dateTime
        });

        try {
            const result = await createTask(formData);
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="relative flex flex-col" onSubmit={handleSubmit}>

            <div className="mb-4">
                <p className="underline">Please enter the task details into the following fields:</p>
            </div>

            <h1 className="text-2xl underline">Title</h1>
            <input 
                id="title"
                name="title"
                type="text"
                placeholder="Task Title (Required)"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                className="border rounded p-2 mb-4" />

            <h1 className="text-2xl underline"> Description</h1>
            <textarea 
                id="description"
                name="description"
                placeholder="Task Description (Optional)"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="border rounded p-2 mb-4" />

            <h1 className="text-2xl underline">Status</h1>
            <select 
                id="status"
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value)}
                required
                className="border rounded p-1 mb-4">
                    <option value="Pending">Pending</option>
                    <option value="InProgress">In Progress</option>
                    <option value="Completed">Completed</option>
            </select>

            <h1 className="text-2xl underline">Due Date</h1>
            <input
                type="datetime-local"
                id="dueDate" value={dateTime}
                onChange={(event) => setDateTime(event.target.value)}
                required
                className="border rounded p-1 mb-4" />
            
            <button type="submit" className="border rounded p-2">Submit</button>

        </form>
    );
}
