import "./index.css";
import { useState } from "react";
import DisplayToDos from "./components/DisplayToDos";
import Form from "./components/Form";

export default function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Walk the dog!",
      deadline: "20/06/2023",
      priority: "high",
      done: false
    }
  ]);

  return (
    <div className="App">
      <Form setTodos={setTodos} />
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}
