'use client'

function UpdateStatusButton() {
    return (
        <button type="submit" className="p-2 border mt-4"
            onClick="">
                Update Status
            </button>
    );
}

export function Task({task}) {
    return (
        <div className="static justify-start border m-4 p-2">
            <h1 className="font-bold text-2xl">{task.title}</h1>
            <h2 className="pt-2 underline">Description</h2>
            <p className="pt-2">{task.description}</p>
            <h2 className="pt-2 underline">Status</h2>
            <p>{task.status}</p>
            <h2 className="pt-2 underline">Due Date</h2>
            <p>{task.dueDate}</p>
            <UpdateStatusButton />
        </div>
    );
}