import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fade-page-animation">
      <footer>
        <div className="bg-black">
          <div
            className="centering"
            style={{ paddingTop: 80, paddingBottom: 80 }}
          >
            <div id="footer-flex-container">
              <div className="footer-logo footer-flex-item">
                <Link to="/work" id="logo-footer">
                  Kade Zaccaro&trade;
                </Link>
                <p className="in-short">
                  Designer &amp; coder passionate about well-designed
                  experiences with close attention to detail. Always learning.
                </p>
              </div>

              <div className="footer-nav-links footer-flex-item">
                <ul>
                  <li className="spacer-line"></li>

                  <li>
                    <Link to="/work">Work</Link>
                  </li>
                  <li className="spacer-line"></li>

                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li className="spacer-line"></li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="spacer-line"></li>
                </ul>
              </div>

              <div className="social footer-flex-item">
                <ul>
                  <li className="spacer-line"></li>

                  <li className="social-icon">
                    <a
                      className="align-icon"
                      href="https://github.com/kadezaccaro"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/icons/github.svg"
                        alt="GitHub"
                        className="filter-white"
                      />
                      GitHub
                    </a>
                  </li>
                  <li className="spacer-line"></li>

                  <li className="social-icon">
                    <a
                      className="align-icon"
                      href="https://www.instagram.com/ktype.xyz/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/icons/instagram.svg" alt="Instagram" />
                      Instagram
                    </a>
                  </li>
                  <li className="spacer-line"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark">
          <div className="centering" style={{ padding: 32 }}>
            <p style={{ marginTop: 0, textAlign: "center" }}>
              Kade Zaccaro &copy; 2022
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
