import "./index.css";
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
      <TodoList />
      </div>
    </div>
  );
};

export default App;