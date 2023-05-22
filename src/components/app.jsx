import React, { useState } from "react";

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  function inputHandler(e) {
    const { value } = e.target;
    setInput(value);
  }
  function addHandler() {
    setTodo((value) => {
      return [...value, input];
    });
  }
  function removeItem(e){
    const {name} = e.target
   const todoIndex = todos.indexOf(name)
   todos.splice(todoIndex,1)
   setTodo((value) => {
    return [...todos];
  });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputHandler} type="text" value={input} />
        <button onClick={addHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return <li> {todo} < input className="span" onClick={removeItem} type="button" name={todo} value={"Delete"}/></li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
