import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const TodosContext = createContext(undefined);

const TodosProvider = ({ children }) => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(savedTodos ? savedTodos : []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const editTodos = (newTodo, mode) => {
    if (mode === "add") {
      setTodos((prev) => [...prev, newTodo]);
    } else if (mode === "edit") {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
      );
    } else if (mode === "delete") {
      setTodos((prev) => prev.filter((todo) => todo.id !== newTodo.id));
    }
  };

  const value = { todos: todos, editTodos: editTodos };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(TodosContext);

  if (context === undefined)
    throw new Error("useTheme must be within TodosContextProvider!");

  return context;
};
export { useTodos, TodosProvider };
