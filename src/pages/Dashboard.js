import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

//! import components
import Sidebar from "../components/dashboard/Sidebar";
import Apps from "../components/dashboard/Apps";
import Calls from "../components/dashboard/Calls";
import Contacts from "../components/dashboard/Contacts";
import Home from "../components/dashboard/Home";
import Locations from "../components/dashboard/Locations";
import Messages from "../components/dashboard/Messages";
import Pictures from "../components/dashboard/Pictures";
import Dropdown from "../components/dashboard/DashboardDropdown";

//! import image
import ic_arrow_left from "../assets/img/ic_arrow_left.svg";
import ic_chevron_left from "../assets/img/ic_chevron_left.svg";
import ic_chevron_right from "../assets/img/ic_chevron_right.svg";
import ic_user from "../assets/img/ic_user.svg";

//! import css
import "../assets/css/dashboard.css";

function Dashboard() {
  const history = useHistory();
  const [nav, setNav] = useState(false);

  const [show, setShow] = useState(false);
  const handleDropdown = () => {
    setShow(!show);
  };

  return (
    <div className="full_width">
      <div className="side_bar_area">
        <Sidebar />
      </div>
      {nav && (
        <div className="mobile_nav_bar">
          <Sidebar />
        </div>
      )}

      <div className={nav ? "nav_btn add_mar" : "nav_btn"}>
        <img
          className="nav_click_btn"
          onClick={() => setNav(!nav)}
          src={nav ? ic_chevron_left : ic_chevron_right}
          alt="NavIcon"
        />
      </div>

      <div className="main_section_area">
        <div className="top_area">
          <img
            onClick={() => history.goBack()}
            src={ic_arrow_left}
            alt="menu_icon"
          />

          <div className="dashboard_dropdown_btn">
            <img
              src={ic_user}
              alt="menu_icon"
              onClick={handleDropdown}
              width={35}
            />
            {show && <Dropdown func={handleDropdown} />}
          </div>
        </div>

        <div className="bottom_area">
          <Switch>
            <Route path="/dashboard" exact component={Home} />
            <Route path="/dashboard/apps" exact component={Apps} />
            <Route path="/dashboard/calls" exact component={Calls} />
            <Route path="/dashboard/contacts" exact component={Contacts} />
            <Route path="/dashboard/locations" exact component={Locations} />
            <Route path="/dashboard/messages" exact component={Messages} />
            <Route path="/dashboard/images" exact component={Pictures} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
