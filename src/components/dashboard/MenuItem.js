import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ img, path, txt }) {
  return (
    <NavLink
      to={path}
      exact
      className="side_menu"
      activeClassName="side_menu_selected pbc"
    >
      <img src={img} alt="logo" width={20} />
      <span className="menu_text">{txt}</span>
    </NavLink>
  );
}

export default MenuItem;
