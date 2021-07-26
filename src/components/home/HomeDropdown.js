import React from "react";

//! import css
import "../../assets/css/home_dropdown.css";

//! import get context
import { GetContext } from "../../utils/ContentProvider";

function Dropdown({ func }) {
  const { authLogout, setToast } = GetContext();
  const handleLogout = async () => {
    const checkLogout = await authLogout();
    if (checkLogout) {
      setToast({
        type: "success",
        text: "Logout Successfully",
      });
      func();
    }
  };
  return (
    <div className="home_dropdown_area">
      <div className="home_dropdown">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div onClick={func} className="cancel_dropdown"></div>
    </div>
  );
}

export default Dropdown;
