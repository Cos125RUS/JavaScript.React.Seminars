import {configureStore} from "@reduxjs/toolkit";
import userSaga, {sagaMiddleware} from "./userSaga";
// import userReducer from "./userReducer";
import userReducer from "./userSlice";
import logMiddleware from "./logMiddleware";

const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(logMiddleware, sagaMiddleware)
});

sagaMiddleware.run(userSaga);

export default store;