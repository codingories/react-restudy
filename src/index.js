import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [n, setN] = React.useState(0);
  const [m, setM] = React.useState(0);
  const onClick = () => {
    setN(n + 1);
  };

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>update n {n}</button>
      </div>
      <Child2 data={m}/>
      {/* <Child2 data={m}/> */}
    {/*用memo封装一下，写成这样子就不会再词刷新,memo使得一个组件只有在其props变化的时候才会执行*/}
    </div>
  );
}

function Child(props) {
  console.log("child 执行了");
  console.log('假设这里有大量代码')
  return <div>child: {props.data}</div>;
}

const Child2 = React.memo(Child);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
