'use client'

import { Suspense } from "react";
import { UpdateTask } from "../../components/updateTask";
import { NavigationButton } from "@/app/components/menu";

export default function Page() {

    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="font-bold text-4xl underline">Update Task Details</h1>
            <Suspense fallback={<p>Loading task...</p>}>
                <UpdateTask />
            </Suspense>
            <NavigationButton label="Go Home" route="/" />
        </div>
    );
}