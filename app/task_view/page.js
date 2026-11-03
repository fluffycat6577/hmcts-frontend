'use client'

import { useRouter } from "next/navigation";

export default function Page() {

    const router = useRouter();

    return (
        <div>
            <h1>Super amazing task goes here</h1>
            <button className="border rounded p-2 m-4" onClick={() => router.push("/")} >
                Go Back
            </button>
        </div>
    )
}