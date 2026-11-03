'use client'

import { useRouter } from "next/navigation";

function RetrieveAllButton({onButtonClick}) {
    return (
        <button type="submit" className="p-2 border rounded m-4"
            onClick={onButtonClick}>
            Retrieve all tasks
        </button>
    );
}

function RetrieveByIdButton({onButtonClick}) {
    return (
        <button type="submit" className="p-2 border rounded m-4"
            onClick={() => onButtonClick.push("/task_view")}>
            Retrieve specific task
        </button>
    );
}

function CreateTaskButton({onButtonClick}) {
    return(
        <button type="submit" className="p-2 border rounded m-4"
            onClick={() => onButtonClick.push("/create_task")}>
            Create new task
        </button>
    );
}

export function Menu({ onRefetch }) {

    const router = useRouter();

    return(
        <div className="flex flex-col items-center justify-center">
            <RetrieveAllButton onButtonClick={onRefetch} />
            <RetrieveByIdButton onButtonClick={router}/>
            <CreateTaskButton onButtonClick={router}/>
        </div>
    );
}