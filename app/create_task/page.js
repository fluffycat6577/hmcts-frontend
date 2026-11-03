'use client'

import { useRouter } from "next/navigation";

export default function Page() {

    const router = useRouter();

    return (
        <div>
            <h1>Hello World!</h1>
            <button className="p-2 border rounded m-4" onClick={() => router.push("/")}>
                Home
            </button>
        </div>
    );
}