import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Login } from "./features/login/login.tsx";
import { Register } from "./features/register/register.tsx";
import { Home } from "./features/home/home.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
