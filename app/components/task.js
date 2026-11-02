'use client'

export function Task({task}) {
    return (
        <div className="flex flex-col justify-start border m-4 p-2">
            <h1 className="border-b">{task.title}</h1>
            <p className="pt-2">{task.description}</p>
            <p>{task.status}</p>
            <p>{task.date}</p>
        </div>
    );
}