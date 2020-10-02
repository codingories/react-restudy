import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const rootElement = document.getElementById("root");

const themeContext = React.createContext(null);
// 上下文其实就是一个全局变量,把themeContext理解为一个全局变量

function App() {
  const [theme, setTheme] = React.useState("red");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {/*value的意思是我们对全局变量进行一次赋值,值就是一个对象*/}
      {/*themeContext.Provider 表示作用域的开始和结束*/}
      <div className={`App ${theme}`}>
        <p>{theme}</p>
        <div>
          <ChildA />
        </div>
        <div>
          <ChildB />
        </div>
      </div>
    </themeContext.Provider>
  );
}

function ChildA() {
  const { setTheme } = React.useContext(themeContext);
  return (
    <div>
      <button onClick={() => setTheme("red")}>red</button>
    </div>
  );
}

function ChildB() {
  const { setTheme } = React.useContext(themeContext);
  return (
    <div>
      <button onClick={() => setTheme("blue")}>blue</button>
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
