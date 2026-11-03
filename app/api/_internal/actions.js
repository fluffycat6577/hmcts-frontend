'use server';

export async function getTasks() {
    const url = process.env.API_URL_HTTP + process.env.ENDPOINT;

    const response = await fetch (
        url,
        {
            method: "GET",
        },
    );

    if (!response.ok) {
        throw new error("Unable to fetch tasks.")
    }

    return response.json();
}

export async function getTaskById(id) {
    const url = process.env.API_URL_HTTP + process.env.ENDPOINT + `/${id}`;

    const response = await fetch (
        url,
        {
            method: "GET",
        },
    );

    if (!response.ok) {
        throw new error(`Unable to fetch specified task with ID: ${id}`);
    }

    return response.json();
}

export async function createTask(task) {
    const url = process.env.API_URL_HTTP + process.env.ENDPOINT;

    const response = await fetch (
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "Title": task.title,
                "Description": task.description,
                "Status": task.status,
                "DueDate": task.dueDate,
            }),
        }
    );

    if (!response.ok){
        throw new Error(`Failed to create task: ${response.status}`);
    }

    return response.json();
}

export async function updateTask(task) {
    const url = process.env.API_URL_HTTP + process.env.ENDPOINT + `/${task.id}`;

    const response = await fetch (
        url,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "Title": task.title,
                "Description": task.description,
                "Status": task.status,
                "DueDate": task.dueDate,
            }),
        }
    );

    if (!response.ok){
        throw new Error(`Unable to update task: ${response.status}`);
    }

    return response.json();
}

export async function deleteTask(id) {
    
}