import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="flex justify-between items-center p-2 border rounded">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              console.log(todo.completed);
              console.log(todo.id);
              dispatch(toggleTodo(todo.id));
            }}
          />
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        </div>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          X
        </button>
      </li>
    </>
  );
};

export default TodoItem;
