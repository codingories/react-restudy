import React, {useReducer, useState} from "react";
import ReactDOM from "react-dom";

const initial = {
  n: 0
} // 创建所有值

const reducer = (state, action)=>{
  if(action.type === 'add'){
    return {n: state.n + action.number}
  } else if(action.type === 'mult'){
    return {n: state.n * 2}
  } else {
    throw new Error('unknown type')
  }
} // 这里写所有的操作, 这样的好处就是下面的代码就简单了

function App() {
  const [state, dispatch] = useReducer(reducer, initial)
  const {n} = state
  const onClick = ()=>{
    dispatch({type: 'add', number: 1})
  }
  const onClick2 = ()=>{
    dispatch({type: 'add', number: 2})
  }
  return (
    <div className="App">
      <h1>n: {n}</h1>
      <button onClick={onClick}>+1</button>
      <button onClick={onClick2}>+2</button>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
