'use client'

function UpdateStatusButton() {
    return (
        <button type="submit" className="p-2 border mt-4"
            onClick={() => console.log("It does nothing")}>
                Update Status
            </button>
    );
}

export function Task({task}) {
    return (
        <div className="static justify-start border m-4 p-2">
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
            <UpdateStatusButton />
        </div>
    );
}