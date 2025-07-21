import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import type { AxiosResponse } from "axios";
import { login } from "../../shared/config/api";

export function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(formData).then((res: AxiosResponse) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("currentuser", JSON.stringify(res.data.user));
      navigate("/home");
    });
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit} action="">
        <p id="login-para">Login</p>
        <input
          className="login-input"
          name="username"
          onChange={handleChange}
          value={formData.username}
          placeholder="username"
          type="text"
        />
        <input
          className="login-input"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="password"
          type="password"
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
