import React from "react";

//! import css
import "../../assets/css/utils_toast.css";

//! import img
import toast_check from "../../assets/img/toast-check.svg";

function Toast({ type, text }) {
  const generateIcon = () => {
    switch (type) {
      case "success":
        return toast_check;
      default:
        return;
    }
  };

  const generateBackground = () => {
    switch (type) {
      case "success":
        return "success-background";
      default:
        return;
    }
  };

  return (
    <div className="toast-area">
      <div className={`toast ${generateBackground()}`}>
        <img src={generateIcon()} alt="toast-icon" height={20} width={20} />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Toast;
