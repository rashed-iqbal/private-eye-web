import React, { useState } from "react";
import { Link } from "react-router-dom";

//! import css
import "../../assets/css/auth_login.css";

//!import icon
import ic_loading from "../../assets/img/ic_loading.svg";

//! import get context
import { GetContext } from "../../utils/ContentProvider";

function Login() {
  const { authLogin, setToast } = GetContext();

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    if (!email || !password) {
      return setError(true);
    }
    setIsLoading(true);
    setError(false);

    const result = await authLogin(email, password);
    if (result && result.success === false) {
      setIsLoading(false);
      setError(true);
      return;
    }

    if (result && result.success === true) {
      setToast({
        type: "success",
        text: "Login Successfully",
      });
    }
  };
  return (
    <div className="login_area">
      <h1>Log In</h1>
      <input
        className={error ? "error_border" : undefined}
        type="text"
        placeholder="username or email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className={error ? "error_text error_visible" : "error_text"}>
        <small>Invalid Credential!</small>
      </div>

      <input
        className={error ? "error_border" : undefined}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={error ? "error_text error_visible" : "error_text"}>
        <small>Invalid Credential!</small>
      </div>
      <button disabled={isLoading} onClick={handleLogin}>
        <span className={isLoading ? "visibility_hidden" : undefined}>
          Login
        </span>
        {isLoading && (
          <div>
            <img src={ic_loading} alt="loading" width={20} height={20} />
            <p>Processing</p>
          </div>
        )}
      </button>
      <p>
        Haven't an account?{" "}
        <Link className="signup_route" to="/auth/signup">
          Signup
        </Link>
      </p>
    </div>
  );
}

export default Login;
