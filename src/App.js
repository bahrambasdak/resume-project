import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRout from "./projects/productManager/components/ProtectedRout";

import ProductManager from "./projects/productManager/ProductManager";
import productManagerRoutes from "./projects/productManager/routes";
import Home from "./projects/resume/Home";
import TodoList from "./projects/todolist/TodoList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/product-manager" element={<ProductManager />}>
            {productManagerRoutes.map((route, key) => {
              if (route.redirect) {
                return (
                  <Route
                    path={route.path}
                    element={<Navigate to={route.pathTo} />}
                    key={key}
                  />
                );
              } else if (route.private) {
                return (
                  <Route
                    path={route.path}
                    element={<ProtectedRout route={route} />}
                    key={key}
                  />
                );
              } else {
                return (
                  <Route key={key} path={route.path} element={route.element} />
                );
              }
            })}
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
