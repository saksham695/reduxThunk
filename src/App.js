import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/action";
export default function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
    </div>
  );
}
