import React, { useState } from "react";
import Todo from "./todo";
function App() {
  const [a, b] = useState("");
  const [r, s] = useState([])
  function hg(event) {
    const c = event.target.value;
    b(c);

  }
  function rt() {
    s((x) => {
      return [...x, a];
    });
    b("");
  }
  function jk(id) {
    s(y=>{
      return y.filter((item,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={a} onChange={hg} />
        <button onClick={rt}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {r.map((item, index) => <Todo
            key={index}
            id={index}
            text={item}
            onChecked={jk}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
