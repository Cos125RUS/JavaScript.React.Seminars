const userReducer = (state = {name: "user"}, action) => {
    switch (action.type) {
        case 'USER_DATA_LOADED':
            return action.payload;
        case 'USER_DATA_LOAD_FAILED':
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;