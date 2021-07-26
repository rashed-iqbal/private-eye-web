import React, { useState } from "react";
import { Link } from "react-router-dom";

//! import css
import "../../assets/css/auth_signup.css";

//!import icon
import ic_loading from "../../assets/img/ic_loading.svg";

import { isEmail } from "../../utils/isEmail.js";

// import get context
import { GetContext } from "../../utils/ContentProvider";

function Signup() {
  const { authSignup, setToast } = GetContext();

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({});

  const handleSignup = async () => {
    const error = {};

    if (!email) {
      error.email = "email can't be empty";
    } else if (!isEmail(email)) {
      error.email = "email invalid";
    }

    if (!password) {
      error.password = "password can't be empty";
    } else if (password.length < 6) {
      error.password = "password must be getter than 6";
    }

    if (!userName) {
      error.username = "username can't be empty";
    }

    if (Object.keys(error).length > 0) {
      console.log(error);
      return setError(error);
    }

    setIsLoading(true);

    const result = await authSignup(userName, email, password);

    if (result && result.success === false) {
      switch (result.errorCode) {
        case "auth/email-already-in-use":
          error.email = "Email already exist!";
          break;
        case "auth/invalid-email":
          error.email = "Invalid email!";
          break;
        case "auth/weak-password":
          error.password = "The password is too weak";
          break;
        case "auth/check-username":
          error.username = "Username already exist";
          break;
        default:
          error.username = "Something went wrong!";
          error.email = "Something went wrong!";
          error.password = "Something went wrong!";
          break;
      }
    }

    if (Object.keys(error).length > 0) {
      setIsLoading(false);
      return setError(error);
    }

    if (result && result.success === true) {
      setToast({
        type: "success",
        text: "Signup Successfully",
      });
    }
  };

  return (
    <div className="signup_area">
      <h1>Sign Up</h1>
      <input
        className={error.username && "error_border"}
        type="text"
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />

      <div
        className={error.username ? "error_text error_visible" : "error_text"}
      >
        <small>{error.username}!</small>
      </div>

      <input
        className={error.email && "error_border"}
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className={error.email ? "error_text error_visible" : "error_text"}>
        <small>{error.email}!</small>
      </div>

      <input
        className={error.password && "error_border"}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div
        className={error.password ? "error_text error_visible" : "error_text"}
      >
        <small>{error.password}!</small>
      </div>

      <button disabled={isLoading} onClick={handleSignup}>
        <span className={isLoading ? "visibility_hidden" : undefined}>
          Signup
        </span>
        {isLoading && (
          <div>
            <img src={ic_loading} alt="loading" width={20} height={20} />
            <p>Processing</p>
          </div>
        )}
      </button>
      <p>
        Already have an account?{" "}
        <Link className="login_route" to="/auth/login">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
