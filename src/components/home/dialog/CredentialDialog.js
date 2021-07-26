import React from "react";
import { Link } from "react-router-dom";

// import img
import ic_alert from "../../../assets/img/ic_alert.svg";

function CredentialDialog() {
  return (
    <div className="dialog_content_area">
      <img src={ic_alert} alt="ic alert" height={80} width={80} />
      <h1>OOPS!</h1>
      <p>
        You haven't create <span>Credential</span> yet. Please create Credential
        to use app feature
      </p>
      <Link to="/dialog/credential/create" className="dialog_button ">
        Create Credential
      </Link>
    </div>
  );
}

export default CredentialDialog;
