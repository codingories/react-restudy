import React, {useState, useEffect} from "react";

import "./styles.css";

const App = (props) => {
  const [n, setN] = useState(0);

  const onClick = ()=>{
    setN(n+1)
  }

  const [nUpdateCount, setNUpdateCount] = useState(0)

  useEffect(()=>{
    setNUpdateCount(x => x +1)
  },[n])

  useEffect(()=>{
    if(nUpdateCount>1){
      console.log('n或者m变了')
    }
  }, [nUpdateCount])
  
  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}




export default App
