import { useEffect } from "react";
import { getAllTasks } from "../api/task.api";

const TaskList = () => {

    useEffect(() => {
        const loadAllTasks = async () => {
            const response_tasks = await getAllTasks();
            console.log(response_tasks.data);
        }

        loadAllTasks();
    }, [])

    return (
        <div>TaskList</div>
    )
}

export default TaskList