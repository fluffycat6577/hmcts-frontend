import { useEffect, useState } from "react";
import { getTasks } from "../api/_internal/actions";

export function useTask() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(0);

    // We attatch a basic state variable to the useEffect as a dependency.
    // This will allow us to do a background refresh of the data without
    // needing to remount the component.

    useEffect(() => {

        async function fetchTask() {
            try {
                setLoading(true);
                const fetchedTasks = await getTasks();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error("Failed to fetch tasks: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchTask();
    }, [refresh]);

    const refetch = () => {
        setRefresh((prev) => prev + 1);
        console.log("Refreshing tasks...");
    }

    return { tasks, loading, refetch };
}