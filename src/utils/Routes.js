import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Import pages
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Home";
import Auth from "../pages/Auth";

//! import get context
import { GetContext } from "./ContentProvider";
import Toast from "../components/utils/Toast";
import Dialog from "../components/home/Dialog";
function Routes() {
  const { currentUser, toast } = GetContext();
  return (
    <>
      {toast && <Toast type={toast.type} text={toast.text} />}

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/dashboard">
          {currentUser ? (
            currentUser.credential ? (
              currentUser.targetMobileName ? (
                <Dashboard />
              ) : (
                <Redirect to="/dialog/connect-phone" />
              )
            ) : (
              <Redirect to="/dialog/credential" />
            )
          ) : (
            <Redirect to="/auth/signup" />
          )}
        </Route>
        <Route path="/dialog">
          {currentUser ? (
            <>
              <Dialog />
              <Homepage />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Route>

        <Route path="/auth">
          {currentUser ? <Redirect to="/" /> : <Auth />}
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
