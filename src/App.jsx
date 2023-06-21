import "./App.css";
import { useState } from "react";

function App() {

const [list, setList] = useState([]);
const [input, setInput] = useState('');


const addTodo = (todo) => {
  const newTodo = {
    id: Math.random(),
    todo: todo,
  }

  setList([...list, newTodo])

  setInput('');
};

const deleteTodo = (id) => {
  const newList = list.filter((todo) => todo.id !== id);

  setList(newList);
}

  return (
    <div>
            <fieldset>
              <legend><h3>Add a task:</h3></legend>
              
              <input
                type="text"
                placeholder="Add a task ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
              <button onClick={() => addTodo(input)}>Add</button>
              <div className="List">
              <ul>
                {list.map((todo) => (
                  <li key={todo.id}>&#10148;&nbsp;&nbsp;
                    {todo.todo}
                  <button className="closeButton" onClick={() => deleteTodo(todo.id)}>&times;</button>
                  </li>
                ))}
              </ul>
              </div>
              
            </fieldset>
            
    </div>
  );
}

export default App;
