'use client'

import { useRouter } from "next/navigation";
import { CreateTaskForm, createTaskForm } from "../components/createTask";

export default function Page() {

    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold underline text-4xl mb-4">Create Task Form</h1>
            <CreateTaskForm />
            <button className="p-2 border rounded m-4" onClick={() => router.push("/")}>
                Go Back
            </button>
        </div>
    );
}