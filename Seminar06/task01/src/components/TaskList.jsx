import {useDispatch, useSelector} from "react-redux";
import {removeTask, toggleTask} from "../actions/taskActions";
import "./TaskList.css";

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    const handleDelete = (id) => {
        dispatch(removeTask(id));
    }

    return (
        <ul>
            {tasks.map((task, index) => (
                <div key={index} className="task">
                    <li
                        key={task.id}
                        onClick={() => handleToggle(task.id)}
                        style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}
                    >
                        {task.description}
                    </li>
                    <button key={'btn' + task.id} onClick={() => handleDelete(task.id)}>X</button>
                </div>
            ))}
        </ul>
    );
}

export default TaskList;