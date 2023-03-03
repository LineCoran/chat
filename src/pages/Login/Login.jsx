import "./Login.css";

export default function Login() {
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
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a new accout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
