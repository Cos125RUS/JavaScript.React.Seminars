import {useContext, useState} from "react";
import {UserContext} from "../contexts/UserContext";
import {ThemeContext} from "../contexts/ThemeContext";
import {switchTheme} from "../modules/switchTheme";
import "../styles/Profile.css"


const Profile = () => {
    const {username, setUsername} = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);
    const [changedName, setChangedName] = useState(username);


    return (
        <div>
            <input type="text" value={changedName} onChange={(e) => {
                setChangedName(e.target.value)
            }}/>
            <button onClick={() => setUsername(changedName)}>Change username</button>
            <br/>
            <button onClick={() => setTheme(switchTheme(theme))}>Change Theme</button>
        </div>
    );
}

export default Profile;