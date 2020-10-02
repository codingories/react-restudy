import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

function App() {
  const nRef = React.useRef(0); // Ref就是一个很简单的对象。 { current:0 }
  const log = () => setTimeout(() => console.log(`n: ${nRef.current}`), 1000);
  const update = React.useState(null)[1];
  // Vue3里面的current是value
  return (
    <div className="App">
      <p>{nRef.current} 这里并不能实时更新</p>
      <p>
        <button onClick={() => {
          nRef.current += 1
          update(nRef.current)
        }}>
          +1
        </button>
        <button onClick={log}>log</button>
      </p>
    </div>
  );
}
// 那我就是要让Ref重新渲染怎么办，React做不到，就是不会重新渲染
// 用Vue3吧，Vue能做到，所以Vue3很可能会抢走React一部分用户，因为Api更符合人的直觉
ReactDOM.render(<App />, rootElement);
