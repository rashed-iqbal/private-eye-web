import React from "react";

//! import css
import "../../assets/css/dashboard_dropdown.css";

function Dropdown({ func }) {
  return (
    <div className="dashboard_dropdown_area">
      <div className="dashboard_dropdown"></div>
      <div onClick={func} className="cancel_dropdown"></div>
    </div>
  );
}

export default Dropdown;
