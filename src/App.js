

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductManager from "./projects/productManager/ProductManager";
import productManagerRoutes from "./projects/productManager/routes";
import Home from "./projects/resume/Home";
import TodoList from "./projects/todolist/TodoList";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/product-manager" element={<ProductManager />}>
            {productManagerRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
