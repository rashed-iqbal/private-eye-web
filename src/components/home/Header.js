import React, { useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./HomeDropdown";

//! import image
import ic_logo from "../../assets/img/ic_text_logo.svg";
import ic_user from "../../assets/img/ic_user.svg";

//! import css
import "../../assets/css/home_header.css";

//! import get context
import { GetContext } from "../../utils/ContentProvider";
function Navbar() {
  const { currentUser } = GetContext();

  const [show, setShow] = useState(false);
  const handleDropdown = () => {
    setShow(!show);
  };

  return (
    <>
      <header>
        <div className="home_logo_area">
          <img src={ic_logo} alt="logo" />
        </div>
        <div className="home_navbar_area">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#demo">Demo</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              {currentUser ? (
                <img
                  onClick={handleDropdown}
                  src={ic_user}
                  alt="logo"
                  height={35}
                  width={35}
                />
              ) : (
                <Link className="home_join_btn" to="/auth/signup">
                  Join
                </Link>
              )}

              {show && <Dropdown func={handleDropdown} />}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
