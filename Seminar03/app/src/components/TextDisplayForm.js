import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {useState} from "react";
import "./TextDisplayForm.css";

const TextDisplayForm = () => {
    const [entryText, setEntryText] = useState("");
    const [currentText, setCurrentText] = useState("");

    const changeText = e => {
        setEntryText(e.target.value);
    }

    const printText = () => {
        setCurrentText(entryText);
        setEntryText("");
    }

    return (
        <div>
            <TextField id="standard-basic" label="Введите текст" variant="standard" value={entryText}
                       onChange={changeText}/>
            <Button variant="outlined" onClick={printText}>Отобразить текст</Button>
            <Card sx={{maxWidth: "100vw"}}>
                <CardContent>
                    <Typography variant="h5" component="h2">{currentText}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default TextDisplayForm;