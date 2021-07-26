import React from "react";
import { useHistory, Route, Switch, Redirect, Link } from "react-router-dom";

//! import Component
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";

//! import css
import "../assets/css/auth.css";

//! import img
import ic_logo from "../assets/img/ic_text_logo.svg";
import ic_go_back from "../assets/img/ic_go_back.svg";
import ic_auth_logo from "../assets/img/ic_auth_logo.svg";
import Playground from "../components/auth/Playground";

function Auth() {
  const history = useHistory();
  return (
    <div className="auth_page">
      <div className=" container ">
        <div className="auth_top_area">
          <img
            onClick={() => history.push("/")}
            src={ic_logo}
            alt="logo"
            className="auth_logo"
          />
          <Link
            to={(location) => location}
            className="go_back_btn"
            onClick={() => history.goBack()}
          >
            <p>Go back</p>
            <img src={ic_go_back} alt="go back" />
          </Link>
        </div>
        <div className="auth_bottom_area">
          <div className="auth_left_area">
            <img src={ic_auth_logo} alt="auth logo" width={450} />
          </div>
          <div className="auth_right_area">
            <Switch>
              <Route path="/auth/signup" exact component={Signup} />
              <Route path="/auth/login" exact component={Login} />
              <Route path="/auth" exact>
                <Redirect to="auth/signup" />
              </Route>
              <Route path="/auth/playground" exact component={Playground} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
