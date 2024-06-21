import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "user"
    },
    reducers: {
        userDataLoading: (state, action) => action.payload,
        userDataLoadFail: (state, action) => action.payload,
    }
});

export const {userDataLoading, userDataLoadFail} = userSlice.actions;
export default userSlice.reducer;