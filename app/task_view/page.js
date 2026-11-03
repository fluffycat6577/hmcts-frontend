'use client'

import { TaskView } from "../components/retrieveTask";
import { NavigationButton } from "../components/menu";

export default function Page() {

    return (
        <div className="relative flex flex-col justify-center items-center">
            <TaskView />
            <NavigationButton label="Go Back" route="/" />
        </div>
    )
}