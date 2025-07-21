import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { register } from "../../shared/config/api";

export function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    register(formData)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  return (
    <div className="Register-wrapper">
      <form className="Register-form" onSubmit={handleSubmit} action="">
        <p id="Register-para">Register</p>
        <input
          className="Register-input"
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="Enter email"
          type="text"
        />
        <input
          className="Register-input"
          onChange={handleChange}
          value={formData.username}
          name="username"
          placeholder="Select username"
          type="text"
        />
        <input
          className="Register-input"
          onChange={handleChange}
          value={formData.password}
          name="password"
          placeholder="Enter password"
          type="password"
        />
        <button className="Register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
