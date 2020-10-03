import React, { useReducer, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

const store = {
  user: null,
  books: null,
  movies: null
};
// 1. 将数据集中在一个 store 对象
function reducer(state, action) {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user };
      // 先把之前的状态复制过来，再加上新的user
    case "setBooks":
      return { ...state, books: action.books };
    case "setMovies":
      return { ...state, movies: action.movies };
    default:
      throw new Error();
  }
} // 2. 将所有操作集中在 reducer

const Context = React.createContext(null);
// 3. 创建一个 Context

function App() {
  const [state, dispatch] = useReducer(reducer, store);
  // 4. 创建对数据的读写 api
  const api = { state, dispatch };
  return (
    <Context.Provider value={api}>
      {/*5. 将第四步的内容放到第三步的 Context*/}
      {/*6. 用 Context.Provider 将 Context 提供给所有组件*/}
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  );
}

function User() {
  const { state, dispatch } = useContext(Context);
  {/*7. 各个组件用 useContext 获取读写 API*/}
  // 注意这里不是方括号，useContext返回一个对象
  useEffect(() => {
    // useEffect替换useState,useState会在页面每次渲染都执行ajax,useEffect只有在第一次渲染才会调用ajax
    ajax("/user").then(user => {
      console.log("user");
      console.log(user);
      dispatch({ type: "setUser", user: user });
      console.log(state);
    });
  }, []);

  return (
    <div>
      <h1>个人信息</h1>
      {/* <div>name: {state.user}</div> */}
      <div>name: {state.user ? state.user.name : ""}</div>
    </div>
  );
}

function Books() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/books").then(books => {
      dispatch({ type: "setBooks", books: books });
    });
  }, []);
  return (
    <div>
      <h1>我的书籍</h1>
      <ol>
        {state.books
          ? state.books.map(book => <li key={book.id}>{book.name}</li>)
          : "加载中"}
      </ol>
    </div>
  );
}

function Movies() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/movies").then(movies => {
      dispatch({ type: "setMovies", movies: movies });
    });
  }, []);
  return (
    <div>
      <h1>我的电影</h1>
      <ol>
        {state.movies
          ? state.movies.map(movie => <li key={movie.id}>{movie.name}</li>)
          : "加载中"}
      </ol>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// 帮助函数

// 假 ajax
// 两秒钟后，根据 path 返回一个对象，必定成功不会失败
function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/user") {
        resolve({
          id: 1,
          name: "Frank"
        });
      } else if (path === "/books") {
        resolve([
          {
            id: 1,
            name: "JavaScript 高级程序设计"
          },
          {
            id: 2,
            name: "JavaScript 精粹"
          }
        ]);
      } else if (path === "/movies") {
        resolve([
          {
            id: 1,
            name: "爱在黎明破晓前"
          },
          {
            id: 2,
            name: "恋恋笔记本"
          }
        ]);
      }
    }, 2000);
  });
}
