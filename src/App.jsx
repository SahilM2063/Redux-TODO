import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="max-w-md m-auto">
      <h1 className="text-xl font-bold mb-5">Todo With Redux</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
