import {Provider} from "react-redux";
import store from "../store/store";

const TaskProvider = ({children}) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default TaskProvider;