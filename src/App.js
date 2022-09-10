//import "./App.scss";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./projects/resume/Home";
import TodoList from "./projects/todolist/TodoList";

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
