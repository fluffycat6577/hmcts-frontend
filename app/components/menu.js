'use client'

function RetrieveAllButton({onButtonClick}) {
    return (
        <button type="submit" className="p-2 border rounded m-4"
            onClick={() => onButtonClick("Retrieve all button")}>
            Retrieve all tasks
        </button>
    );
}

function RetrieveByIdButton({onButtonClick}) {
    return (
        <button type="submit" className="p-2 border rounded m-4"
            onClick={() => onButtonClick("Retrieve specifc button")}>
            Retrieve specific task
        </button>
    );
}

function CreateTaskButton({onButtonClick}) {
    return(
        <button type="submit" className="p-2 border rounded m-4"
            onClick={() => onButtonClick("Create button")}>
            Create new task
        </button>
    );
}

export function Menu({ onRefetch }) {

    const onButtonClick = (value) => {
        console.log(value);
    };

    return(
        <div className="flex flex-col items-center justify-center">
            <RetrieveAllButton onButtonClick={onRefetch} />
            <RetrieveByIdButton onButtonClick={onButtonClick}/>
            <CreateTaskButton onButtonClick={onButtonClick}/>
        </div>
    );
}