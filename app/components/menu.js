'use client'

import { useRouter } from "next/navigation";

export function NavigationButton({label, route}) {

    const router = useRouter();

    return (
        <button type="submit" className="p-2 border rounded p-2 m-4 hover:bg-gray-300"
        onClick={() => router.push(route)}>
            {label}
        </button>
    )
}

export function Menu() {

    return(
        <div className="flex flex-col items-center justify-center">
            <NavigationButton label="Retrieve all tasks" route="/tasks" />
            <NavigationButton label={"Retrieve specific task"} route="/task_view" />
            <NavigationButton label={"Create new task"} route="/create_task" />
        </div>
    );
}