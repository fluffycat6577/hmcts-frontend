'use client'

import { CreateTaskForm } from "../components/createTask";
import { NavigationButton } from "../components/menu";

export default function Page() {

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold underline text-4xl mb-4">Create Task Form</h1>
            <CreateTaskForm />
            <NavigationButton label="Go Back" route="/" />
        </div>
    );
}