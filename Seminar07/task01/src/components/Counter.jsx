import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../reducers/counterSlice";

const Counter = () => {
    const counter = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrement = () => {
        dispatch(increment());
    };

    return (
      <div>
          <p>{counter}</p>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
      </div>
    );
};

export default Counter;