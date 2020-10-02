import React, {useState} from "react";
import ReactDOM from "react-dom";

function App() {
  const [n,setN] = useState(0)
  // 写成函数js引擎不会立即解析，减少多余的计算过程, 用处不大，多算一次影响不大
  const onClick = ()=>{
    // setN(n+1);
    // setN(n+2);
    // n 不能+3,而是+2
    setN(i=>i+1);
    setN(i=>i+2);
    // 这样写就能+3,传一个操作,set里面优先使用函数,除非下面不能用再用上面的写法
  }
  return (
    <div className="App">
      <h1>n: {n}</h1>
      <button onClick={onClick}>+2</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
