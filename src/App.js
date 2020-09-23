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
      n: 0,
      m: 0
    };
  }
  addN() {
    this.setState({ n: this.state.n + 1 });
    // m 会被覆盖为 undefined 吗？
  }
  addM() {
    this.setState({ m: this.state.m + 1 });
    // n 会被覆盖为 undefined 吗？
  }
  render() {
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        <button onClick={() => this.addN()}>n+1</button>
        m: {this.state.m}
        <button onClick={() => this.addM()}>m+1</button>
        <Grandson />
      </div>
    );
  }
}

const Grandson = () => {
  const [n, setN] = React.useState(0);
  const [m, setM] = React.useState(0);
  return (
    <div className="Grandson">
      孙子 n:{n}
      <button onClick={() => setN(n + 1)}>n+1</button>
      m:{m}
      <button onClick={() => setM(m + 1)}>m+1</button>
    </div>
  );
};
