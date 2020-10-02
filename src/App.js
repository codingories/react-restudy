import React from "react";

// import "./styles.css";

const App = () => {
  console.log('App 运行了')
  const [n, setN] = React.useState(0);
  console.log(`n: ${n}`)
  return (
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={() => setN(n + 1)}>+1</button>
      </p>
    </div>
  )
}


export default App
