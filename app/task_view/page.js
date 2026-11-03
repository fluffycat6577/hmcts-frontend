'use client'

import { useRouter } from "next/navigation";
import { TaskView } from "../components/retrieveTask";

export default function Page() {

    const router = useRouter();

    return (
        <div className="relative flex flex-col justify-center items-center">
            <TaskView />
            <button className="border rounded p-2 m-4" onClick={() => router.push("/")} >
                Go Back
            </button>
        </div>
    )
}