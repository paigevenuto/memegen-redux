import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const addTodo = (formData) => {
    const todo = { task: formData.task, todoId: uuid() };
    dispatch({ type: "ADD_TODO", todo });
  };

  function delTodo(targetId) {
    dispatch({ type: "DEL_TODO", targetId });
  }

  return (
    <ul className="TodoList" id="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <li id={todo.todoId} key={todo.todoId}>
          {todo.task}
          <button onClick={() => delTodo(todo.todoId)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
