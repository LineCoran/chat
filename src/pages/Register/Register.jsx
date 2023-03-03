import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LineSocial</h3>
          <span className="loginDesc">Welcome to the new social network!</span>
        </div>

        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="email" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <input placeholder="Password again" type="password" className="loginInput" />
            <button className="loginButton">Sign up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
