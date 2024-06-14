import {UserContext} from "../contexts/UserContext";
import {ThemeContext} from "../contexts/ThemeContext";
import {useState} from "react";
import {Provider} from "react-redux";
import {store} from "../stores/store";
import counterStore from "../stores/counterStore";

const MyProvider = ({children}) => {
    const [username, setUsername] = useState("Guest");
    const [theme, setTheme] = useState("light");

    return (
        <Provider store={counterStore}>
        {/*<Provider store={store}>*/}
            <UserContext.Provider value={{username, setUsername}}>
                <ThemeContext.Provider value={{theme, setTheme}}>
                    {children}
                </ThemeContext.Provider>
            </UserContext.Provider>
        </Provider>
    );
}

export default MyProvider;