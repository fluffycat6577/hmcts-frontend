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