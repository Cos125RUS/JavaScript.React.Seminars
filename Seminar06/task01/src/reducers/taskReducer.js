const initialState = [
    {id: 1, description: "Example task", isCompleted: false},
];

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {id: Date.now(), description: action.payload.description, isCompleted: false}];
        case 'REMOVE':
            return state.filter(task => task.id !== action.payload.id);
        case 'TOGGLE':
            return state.map((task) => task.id === action.payload.id ? {...task, isCompleted: !task.isCompleted} : task);
        default:
            return state;
    }
};

export default taskReducer;