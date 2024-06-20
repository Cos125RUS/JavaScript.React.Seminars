const logMiddleware = store => next => action => {
    console.log("action: " + action.type.split('/')[1]);
    console.log("previous value: ", store.getState().counter.count);
    setTimeout(() => console.log("next value: ", store.getState().counter.count));

    return next(action);
};

export default logMiddleware;