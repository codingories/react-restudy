import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

// let n = 0
// const App = ()=> React.createElement('div', {className:'red'}, [
//   n,
//   React.createElement('button',{onClick:()=>{
//     n+=1
//       ReactDOM.render(
//         App(),
//         document.getElementById('root')
//       );
//
//     }},'+1')
// ])
//
// ReactDOM.render(
//   App(),
//   document.getElementById('root')
// );
//

ReactDOM.render(<App />, document.getElementById('root'))
