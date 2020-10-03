import React, {useEffect, useMemo, useRef} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const count = useRef(0);
  const [n, setN] = React.useState(0);
  const onClick = ()=>{
    setN(n + 9);
  }
  useEffect(()=>{
    count.current+=1
    console.log(count.current)
    // 通过useRef记录渲染的次数
  })
  return (
    <div className="App">
      <div>
        <button onClick={onClick}>update n {n}</button>
      </div>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
