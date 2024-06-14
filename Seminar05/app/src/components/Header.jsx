import {UserContext} from "../contexts/UserContext";
import {useContext} from "react";

const Header = () => {
    const {username} = useContext(UserContext);

    return (
        <header>
            <p>Hello, {username}</p>
        </header>
    );
}

export default Header;