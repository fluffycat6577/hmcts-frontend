'use client'

import { useRouter } from "next/navigation";

export function NavigationButton({label, onButtonClick, route}) {
    return (
        <button type="submit" className="p-2 border rounded p-2 m-4"
        onClick={() => onButtonClick.push(route)}>
            {label}
        </button>
    )
}

export function Menu() {

    const router = useRouter();

    return(
        <div className="flex flex-col items-center justify-center">
            <NavigationButton label="Retrieve all tasks" onButtonClick={router} route="/tasks" />
            <NavigationButton label={"Retrieve specific task"} onButtonClick={router} route="/task_view" />
            <NavigationButton label={"Create new task"} onButtonClick={router} route="/create_task" />
        </div>
    );
}