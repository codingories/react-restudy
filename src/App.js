import React from "react";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      爸爸
      <Son />
    </div>
  );
}

class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0
    };
  }
  add() {
    // this.state.n += 1 为什么不行, 因为React没有像vue那样做数据劫持，必须用setState,
    // React理念是数据不可变，所以必须生成新的对象,再传给setState
    this.setState({ n: this.state.n + 1 });
    // 这样写可以，但是由于setState是异步的更新UI的过程，牛x的程序员为了避免混淆了新的state和旧的state而产生bug
    // this.setState(state=>{
    //   const n = state.n+1
    //   console.log(n)
    //   return {n}
    // })
  }
  render() {
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <Grandson />
      </div>
    );
  }
}

const Grandson = () => {
  const [n, setN] = React.useState(0);
  return (
    <div className="Grandson">
      孙子 n:{n}
      <button onClick={() => setN(n + 1)}>+1</button>
    {/*  setN 永远不会改变N*/}
    </div>
  );
};
