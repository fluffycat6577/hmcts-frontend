import { useEffect, useState } from "react";

export function useTask() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        console.log("temp");
    }, [refresh]);

    const refetch = () => {
        setRefresh((prev) => prev + 1);
        console.log("Refreshing tasks...");
    }

    const updateNoRefetch = (newTasks) => {
        setTasks((prevTasks) => [...prevTasks, newTasks]);
    }

    const deleteTaskFromState = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
    }

    return { tasks, loading, refetch, updateNoRefetch, deleteTaskFromState };
}