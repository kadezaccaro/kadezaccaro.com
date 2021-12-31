import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fade-page-animation">
      <div className="">
        <header className="centering-header">
          <nav id="navbar">
            <Link to="/work" id="logo-header">
              Kade Zaccaro&trade;
            </Link>

            <div id="nav-links">
              <ul>
                <li className="remove-top-padding">
                  <NavLink
                    to="/work"
                    activeClassName="active"
                    className="hover-underline-anim"
                  >
                    Work
                  </NavLink>
                </li>
                <li className="remove-top-padding">
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    className="hover-underline-anim"
                  >
                    About
                  </NavLink>
                </li>
                <li className="remove-top-padding">
                  <NavLink
                    to="/contact"
                    activeClassName="active"
                    className="hover-underline-anim"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
