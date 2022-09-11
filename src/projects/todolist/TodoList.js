
import classes from './todoListStyles.module.css';
import TodosHeader from "./components/Header";
import AddTodos from "./components/AddTodos";
import { useEffect, useState } from "react";
import TodosList from "./components/Todos";
import TodosFooter from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import {TodoValueContextProvider} from './contexts/TodoValue'

function TodoList() {
  const [todosState, setTodosState] = useState([]);

  const setTodos = (todos) => {
    setTodosState(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect( () => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    //document.getElementsByTagName('html')[0].setAttribute('dir','ltr');

    setTodosState(localTodos ? localTodos : []);
  }, []);

  function addTodo(title) {
    setTodos([
      ...todosState,
      { title: title, isCompleted: false, id: uuidv4() },
    ]);
  }

  return (
    <div className={`${classes.TodoList} `}>
      <TodoValueContextProvider>
      <TodosHeader />
      <AddTodos addTodo={addTodo} />
      <TodosList todos={todosState} setTodos={setTodos} />
      <TodosFooter todos={todosState} />
      </TodoValueContextProvider>
    </div>
  );
}

export default TodoList;
