'use client'

import { useRouter } from "next/navigation";
import { CreateTaskForm, createTaskForm } from "../components/createTask";

export default function Page() {

    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Hello World!</h1>
            <CreateTaskForm />
            <button className="p-2 border rounded m-4" onClick={() => router.push("/")}>
                Home
            </button>
        </div>
    );
}