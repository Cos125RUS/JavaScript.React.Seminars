import {useState} from "react";


export default function TodoList() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    function addToList(e) {
        e.preventDefault();
        if(input.trim().length) {
            setList([...list, input]);
            setInput("");
        }
    }

    return (
        <>
            <form>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addToList}>Add</button>
            </form>
            <ul className="list">
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    );
}