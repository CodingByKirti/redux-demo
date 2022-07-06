import logo from "./logo.svg";
import "./App.css";
import { decNum, incNum } from "./Actions/MyActions";
import { useDispatch, useSelector } from "react-redux";
import { IncDec } from "./Reducers/IncDec";

function App() {
  const state = useSelector((state) => state.IncDec);

  const dispatch = useDispatch();

  return (
    <div>
      <p className="App-header">
        <button onClick={() => dispatch(decNum())}>-</button>
        <input type="text" value={state} size="1" />
        <button onClick={() => dispatch(incNum())}>+</button>

        {/* <button onClick={() => decNum()}>-</button>
        <input type="text" value={state} size="1" />
        <button onClick={() =>incNum()}>+</button> */}
      </p>
    </div>
  );
}

export default App;
