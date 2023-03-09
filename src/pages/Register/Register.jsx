import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    username: ""
  })

  const [error, setError] = useState(false);

  const handleChange = (e) => setInputs(prev => {
    setError(false);
    return {...prev, [e.target.name]: e.target.value }
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res =  await axios.post("http://localhost:4000/auth/register",
      inputs
      );
      const data = await res.data;
      navigate("/login")
      setError(false);
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LineSocial</h3>
          <span className="loginDesc">Welcome to the new social network!</span>
        </div>

        <div className="loginRight">
          <div className="loginBox">
            <input onChange={handleChange} name="name" placeholder="Your name" className="loginInput" />
            <input onChange={handleChange} name="username" placeholder="Username" className="loginInput" />
            <input onChange={handleChange} name="email" placeholder="Email" type="email" className="loginInput" />
            <input onChange={handleChange} name="password" placeholder="Password" type="password" className="loginInput" />
            {error && <p className="error">{error}</p>}
            <button onClick={handleRegister} className="loginButton">Register</button>
            <button className="loginRegisterButton"><Link to={"/login"}>Login</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
