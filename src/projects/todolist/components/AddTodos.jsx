import { MdOutlineLibraryAdd } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { useTodos } from "../contexts/Todos";
import classes from "../todoListStyles.module.css";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const AddTodos = () => {
  const { todos, editTodos } = useTodos();
  const todoRef = useRef();

  const addTodo = (e, mode) => {
    e.preventDefault();
    if (todoRef.current.value) {
      editTodos(
        { id: uuidv4(), title: todoRef.current.value, status: false },
        mode
      );
      todoRef.current.value = "";
    }
  };

  const editTodo = (e, mode) => {
    e.preventDefault();
    editTodos(
      {
        ...todos.filter((todo) => todo.edit === true)[0],
        title: todoRef.current.value,
        edit: false,
      },
      mode
    );
    todoRef.current.value = "";
  };
  useEffect(() => {
    const editTitle = todos.filter((todo) => todo?.edit)[0]?.title;
    if (editTitle) todoRef.current.value = editTitle;
  }, [todos]);

  return (
    <div className={classes.add_todos}>
      <form>
        <input
          ref={todoRef}
          type="text"
          placeholder="Add task"
          autoFocus={true}
        />

        <button onClick={(e) => editTodo(e, "edit")}>
          <GrUpdate />
        </button>
        <button onClick={(e) => addTodo(e, "add")}>
          <MdOutlineLibraryAdd />
        </button>
      </form>
    </div>
  );
};

export default AddTodos;
