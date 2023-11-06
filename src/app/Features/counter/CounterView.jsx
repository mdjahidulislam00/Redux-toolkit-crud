import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter app using Redux toolkit</h1>
      <hr />
      <h2>Count: {count} </h2>
      <hr />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        INCREMENT +
      </button>
      <button onClick={() => dispatch(incrementByAmount())}>
        INCREMENT BY 10
      </button>
      <button onClick={() => dispatch(reset())}>RESET VALUE</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT -</button>
    </div>
  );
}

export default CounterView;
