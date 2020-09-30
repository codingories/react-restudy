import React, {useState, useEffect} from "react";

import "./styles.css";

const App = (props) => {
  const [childVisible, setChildVisible] = useState(true)
  const hide = ()=>{
    setChildVisible(false)
  }
  const show = ()=>{
    setChildVisible(true)
  }
  return (
    <div>
      {childVisible ? <button onClick={hide}>hide</button>:<button onClick={show}>show</button>}
      {childVisible ? <Child /> : null}
    </div>
  )
}


const Child = (props)=>{
  useEffect(()=>{
    return ()=>{
      console.log('Child 销毁了')
    }
  })
  return (
    <div>Child</div>
  )
}


export default App
