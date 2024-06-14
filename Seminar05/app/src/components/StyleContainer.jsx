import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

const StyleContainer = ({children}) => {
const {theme} = useContext(ThemeContext);

    return (
        <div className={theme}>
            {children}
        </div>
    );
}

export default StyleContainer;