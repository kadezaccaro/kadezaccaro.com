import React from "react";
import { Link } from "react-router-dom";

const SlidingNavBar = () => {
  // When the user scrolls down 120px from the top of the document, slide down the navbar
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 120 ||
      document.documentElement.scrollTop > 120
    ) {
      document.getElementById("sliding-navbar").style.top = "0";
    } else {
      document.getElementById("sliding-navbar").style.top = "-56px";
    }
  }
  return (
    <div>
      <header>
        <nav id="sliding-navbar">
          <div id="sliding-navbar-links">
            <Link to="/work">[Work]</Link>
            <Link to="/about">[About]</Link>
            <Link to="/contact">[Contact]</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default SlidingNavBar;
