import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import logMiddleware from "../middlewares/logMiddleware";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware)
});

export default store;