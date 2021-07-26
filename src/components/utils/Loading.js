import React from "react";

//! import css
import "../../assets/css/utils_loading.css";

// import img
import ic_loading from "../../assets/img/loading.gif";

function Loading() {
  return (
    <div className="loading_area">
      <img src={ic_loading} alt="loading..." />
    </div>
  );
}

export default Loading;
