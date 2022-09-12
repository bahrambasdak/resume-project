//import "./App.scss";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AuthProvider } from "./projects/productManager/contexts/Auth";
//import { AuthProvider } from "./projects/productManager/contexts/Auth";
import Dashboard from "./projects/productManager/pages/dashboard";
import Login from "./projects/productManager/pages/Login";
import ProductManager from "./projects/productManager/ProductManager";
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
            <Route path="login" element={<Login/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Route>
          <Route path="/" element={<Home />} />
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
