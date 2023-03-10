import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

export default function Login() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [error, setErorr] = useState(false);
  const [inputs, setIputs] = useState({
    username: "",
    password: "",
  })

  useEffect(() => {
    if(currentUser) navigate('/')
  }, [currentUser, navigate])
  
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      
    } catch (error) {
      setErorr(error.response.data);
    }
  }

  const handleChange = (e) => setIputs(pre => {
    setErorr(false);
    return {...pre, [e.target.name]: e.target.value}
  })

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LineSocial</h3>
          <span className="loginDesc">Welcome to the new social network!</span>
        </div>

        <div className="loginRight">
          <div className="loginBox">
            <input name="username" onChange={handleChange} placeholder="Email" type="username" className="loginInput" />
            <input name="password" onChange={handleChange} placeholder="Password" type="password" className="loginInput" />
            {error && <p className="error">{error}</p>}
            <button onClick={(e) => handleLogin(e)} className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton"><Link to={"/register"}>Create a new account</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
