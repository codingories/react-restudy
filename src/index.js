import React from 'react';
import ReactDOM from 'react-dom';
const rootElement = document.getElementById("root");

function App() {
  const [n, setN] = React.useState(0);
  const log = ()=> setTimeout(()=> console.log(`n: ${n}`), 3000)
  return (
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={()=>{setN(n+1)}}>+1</button>
        <button onClick={log}>log</button>
        {/*点击log 3秒后把n打印出n*/}
      </p>
    </div>
  );
}
// 两种操作
// 1. 点击+1再点击log-- 无bug
// 2. 点击log再点击+1-- 有bug
// 问题: 为什么log出了旧数据?

ReactDOM.render(<App />, rootElement);


