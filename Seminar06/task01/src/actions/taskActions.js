const ADD = 'ADD';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';

export const addTask = (description) => ({
    type: ADD,
    payload: {description}
});

export const toggleTask = (id) => ({
    type: TOGGLE,
    payload: {id}
});

export const removeTask = (id) => ({
    type: REMOVE,
    payload: {id}
});
