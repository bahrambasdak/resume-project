import classes from "../todoListStyles.module.css";
import { MdOutlineDeleteOutline, MdEditNote } from "react-icons/md";
import { useTodos } from "../contexts/Todos";

const TodosList = () => {
  const { todos, editTodos } = useTodos();

  function handleChecked(e, todo) {
    editTodos({ ...todo, status: e.target.checked }, "edit");
  }

  function handleEdit(todo) {
    todos.forEach((item) => {
      if (item.edit === true && todo.id !== item.id)
        editTodos({ ...item, edit: false }, "edit");
    });
    editTodos({ ...todo, edit: true }, "edit");
  }

  return (
    <div className={classes.todos_list}>
      <ul>
        {todos.map((todo, key) => (
          <li
            className={`${todo.status ? classes.iscomplete : ""} ${
              todo.edit ? classes.edited : ""
            }`}
            key={key}
          >
            <input
              type="checkBox"
              onChange={(e) => handleChecked(e, todo)}
              checked={todo.status}
            />
            <div className={classes.todo_content}>
              <span>{todo.title}</span>
            </div>
            <button onClick={() => handleEdit(todo)}>
              <MdEditNote />
            </button>
            <button onClick={() => editTodos(todo, "delete")}>
              <MdOutlineDeleteOutline />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
