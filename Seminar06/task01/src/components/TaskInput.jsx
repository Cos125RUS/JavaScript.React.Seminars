import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../actions/taskActions";

const TaskInput = () => {
    const [text, setText] = useState('');
    const dispatch= useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addTask(text));
        setText('');
    }

    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                value={text}
                onChange={(e) => {setText(e.target.value)}}
            />
            <button>ADD</button>
        </form>
    );
}

export default TaskInput;