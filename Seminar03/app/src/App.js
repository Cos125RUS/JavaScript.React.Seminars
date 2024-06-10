import './App.css';
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import MessagesList from "./components/MessagesList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TextDisplayForm from "./components/TextDisplayForm";

const name = "Valerii";
const messages = [
    {id: 1, text: "Message 1"},
    {id: 2, text: "Message 2"},
];

function App() {
    return (
        <div className="App">
            <ThemeSwitcher>
                <Hello name={name}/>
                <Counter/>
                <MessagesList messages={messages}/>
                <br/>
                <TextDisplayForm/>
            </ThemeSwitcher>
        </div>
    );
}

export default App;
