import logo from './logo.svg';
import './App.css';
import TaskProvider from "./components/TaskProvider";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
    return (
        <TaskProvider>
            <TaskInput/>
            <TaskList/>
        </TaskProvider>
    );
}

export default App;
