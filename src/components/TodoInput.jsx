import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập công việc ..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm
        </button>
      </div>
    </>
  );
};

export default TodoInput;
