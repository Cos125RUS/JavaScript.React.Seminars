import {useState} from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = ({children}) => {
    const [theme, setTheme] = useState("light");
    const themes = {
        light: "dark",
        dark: "light"
    }

    const changeTheme = () => {
        setTheme(themes[theme])
    };

    return (
        <div className={theme}>
            <button onClick={changeTheme}>switch</button>
            {children}
        </div>
    );
}

export default ThemeSwitcher;