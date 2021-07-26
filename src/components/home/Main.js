import React from "react";
import { Link } from "react-router-dom";

//! import css
import "../../assets/css/home_main.css";

// import get context

function Main({ showDialog }) {
  return (
    <main>
      <div className="home_main_area">
        <h1>Remote Monitoring App for Android</h1>
        <div className="home_btn_area">
          <Link to={(location) => location} className="download_btn">
            <span>Download</span>
          </Link>
          <Link to={"/dashboard"} className="go_to_dashboard_btn">
            Go to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
