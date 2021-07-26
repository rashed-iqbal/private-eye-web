import React from "react";

import MenuItem from "./MenuItem";

//! import image
import ic_logo from "../../assets/img/ic_text_logo.svg";
import ic_home from "../../assets/img/ic_home.svg";
import ic_call from "../../assets/img/ic_call.svg";
import ic_contact from "../../assets/img/ic_contact.svg";
import ic_image from "../../assets/img/ic_image.svg";
import ic_location from "../../assets/img/ic_location.svg";
import ic_message from "../../assets/img/ic_message.svg";
import ic_apps from "../../assets/img/ic_apps.svg";

//! import css
import "../../assets/css/dashboard_sidebar.css";

function sidebar() {
  return (
    <div className="side_bar">
      <img src={ic_logo} alt="logo" className="sidebar_logo" />
      <div className="navbar_area">
        <MenuItem img={ic_home} path="/dashboard" txt="Dashboard" />
        <MenuItem img={ic_message} path="/dashboard/Messages" txt="Messages" />
        <MenuItem img={ic_call} path="/dashboard/calls" txt="Calls" />
        <MenuItem img={ic_contact} path="/dashboard/contacts" txt="Contacts" />
        <MenuItem img={ic_image} path="/dashboard/images" txt="Images" />
        <MenuItem
          img={ic_location}
          path="/dashboard/locations"
          txt="Locations"
        />
        <MenuItem img={ic_apps} path="/dashboard/apps" txt="Apps" />
      </div>
    </div>
  );
}

export default sidebar;
