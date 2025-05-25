import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <>
      <div className="min-h screen bg-gray-100 p-4">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo App</h1>
          <TodoInput />
          <ProgressBar />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
