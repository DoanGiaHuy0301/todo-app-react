import { useSelector } from "react-redux";

const ProgressBar = () => {
  const todos = useSelector((state) => state.todos);
  const completed = todos.filter((todo) => todo.completed).length;
  const percent = todos.length === 0 ? 0 : (completed / todos.length) * 100;
  
  return (
    <>
      <div className="mb-4">
        <div className="h-4 bg-gray-200 rounded-full">
          <div
            className="h-4 bg-green-500 rounded-full transition-all"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1 text-center">
          Hoàn thành {completed}/{todos.length} công việc
        </p>
      </div>
    </>
  );
};

export default ProgressBar;
