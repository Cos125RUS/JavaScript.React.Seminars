import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../reducers/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    // const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>up</button>
            {/*<button onClick={() => dispatch({ type: 'INCREMENT' })}>up</button>*/}
            <button onClick={() => dispatch(decrement())}>down</button>
            {/*<button onClick={() => dispatch({ type: 'DECREMENT' })}>down</button>*/}
        </div>
    );
}

export default Counter;