import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const buttonRef = useRef(null);
  return (
    <div className="App">
      <Button3 ref={buttonRef}>按钮</Button3>
    </div>
  );
}

const Button2 = (props, ref) => {
  console.log(props);
  console.log('ref', ref)
  return <button className="red" ref={ref} {...props} />;
};
// 总结: 如果一个函数组件想要接收别人传来的参数，自己必须用forwardRef包起来
const Button3 = React.forwardRef(Button2)

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
