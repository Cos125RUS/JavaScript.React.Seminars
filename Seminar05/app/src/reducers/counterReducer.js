export const counterReducer = (state = 0, {type}) => {
    switch (type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            if (state > 0) {
                return state - 1;
            } else return 0;
        default:
            return state;
    }
}