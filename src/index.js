import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')


let _state = [];
let index = 0;
const myUseState = (initialValue) => {
  const currentIndex = index;
  // 这样写的原因是因为+1之后再return就return的是下一个了,n,m就不会出现再页面上是undefined
  _state[currentIndex] =
    _state[currentIndex] === undefined ? initialValue : _state[currentIndex];
  const setState = (newValue) => {
    console.log(currentIndex);
    _state[currentIndex] = newValue;
    render();
  };
  index += 1;
  return [_state[currentIndex], setState];
};

const render = () => {
  index = 0;
  // 理论上说每次渲染app之前都需要重置index,这一步是最重要的
  ReactDOM.render(<App />, rootElement);
};

function App() {
  const [n, setN] = myUseState(0);
  const [m, setM] = myUseState(0);

  return (
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={() => setN(n + 1)}>+1</button>
      </p>
      <p>{m}</p>
      <p>
        <button onClick={() => setM(n + 1)}>+1</button>
      </p>
    </div>
  );
}

ReactDOM.render(<App />, rootElement);


