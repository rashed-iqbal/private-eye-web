import React from "react";

// import context
import { GetContext } from "../../../utils/ContentProvider";

function ConnectPhoneDialog() {
  const { currentUser } = GetContext();
  return (
    <div>
      <h1>Your Credential is</h1>
      <h1>{currentUser && currentUser.credential}</h1>
    </div>
  );
}

export default ConnectPhoneDialog;
