import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

// import css
import "../../assets/css/home_dialog.css";

//! import icon
import ic_close from "../../assets/img/ic_close.svg";
import ConnectPhoneDialog from "./dialog/ConnectPhoneDialog";
import CreateCredential from "./dialog/CreateCredential";
import CredentialDialog from "./dialog/CredentialDialog";

// import get context
import { GetContext } from "../../utils/ContentProvider";

function Dialog() {
  const { currentUser } = GetContext();
  return (
    <div className="dialog_area">
      <div className="dialog">
        <Link to="/" className="dialog_exit_btn">
          <img src={ic_close} alt="close" width={12} height={12} />
        </Link>
        <div className="dialog_content">
          <Switch>
            <Route path="/dialog/credential" exact>
              {currentUser &&
                (currentUser.credential ? (
                  currentUser.targetMobileName ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <Redirect to="/dialog/connect-phone" />
                  )
                ) : (
                  <CredentialDialog />
                ))}
            </Route>

            <Route path="/dialog/connect-phone" exact>
              {currentUser &&
                (currentUser.credential ? (
                  currentUser.targetMobileName ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <ConnectPhoneDialog />
                  )
                ) : (
                  <Redirect to="/dialog/credential" />
                ))}
            </Route>

            <Route path="/dialog/credential/create" exact>
              {currentUser &&
                (currentUser.credential ? (
                  currentUser.targetMobileName ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <Redirect to="/dialog/connect-phone" />
                  )
                ) : (
                  <CreateCredential />
                ))}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
