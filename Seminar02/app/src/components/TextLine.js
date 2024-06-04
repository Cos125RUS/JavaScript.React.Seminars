import {useState} from "react";


export default function TextLine() {
    const [line, setLine] = useState("");

    return (
        <>
            <input onChange={(e) => setLine(e.target.value)} type="text" id="line" />
            <p>{line}</p>
        </>
    );
}