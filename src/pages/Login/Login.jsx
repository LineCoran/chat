import "./Login.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function Login() {

  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
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
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <button onClick={login} className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton"><Link to={"/register"}>Create a new account</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
