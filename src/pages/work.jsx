import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="slide-fade-page-animation">
      <div className="centering">
        <h1 className="intro">
          I'm Kade, a <strong>Designer </strong>
          &amp; <strong>Front-End Developer.</strong>
        </h1>
      </div>

      <div className="centering" style={{ paddingTop: 0 }}>
        <section id="work">
          <div id="work-grid" className="fade-out-siblings">
            <Link to="/grand-place" className="project-card">
              <figure>
                <div className="thumbnail border">
                  <img
                    src="/work/gp-cover-v2.svg"
                    alt='"GP" monogram with rectangular border'
                  />
                </div>
                <figcaption>
                  <h2 className="card-title">Grand Place</h2>
                  <p className="card-tags">Branding, Web Development</p>
                </figcaption>
              </figure>
            </Link>

            <Link to="/logos" className="project-card">
              <figure>
                <div className="thumbnail">
                  <img src="/work/m-mark.svg" alt='"M" brush script logomark' />
                </div>
                <figcaption>
                  <h2 className="card-title">Logofolio</h2>
                  <p className="card-tags">Logo Design</p>
                </figcaption>
              </figure>
            </Link>

            <Link to="/lettering" className="project-card">
              <figure>
                <div className="thumbnail">
                  <img
                    loading="lazy"
                    src="/work/lettering-cover-v3.svg"
                    alt='"L" monoline script'
                  />
                </div>
                <figcaption>
                  <h2 className="card-title">Lettering Collection</h2>
                  <p className="card-tags">Custom Lettering</p>
                </figcaption>
              </figure>
            </Link>

            <Link to="/dimensional-type" className="project-card">
              <figure>
                <div className="thumbnail">
                  <img
                    loading="lazy"
                    src="/work/dt-cover.webp"
                    alt='"Y" inflated balloon floating in the sky 3D effect'
                  />
                </div>
                <figcaption>
                  <h2 className="card-title">Dimensional Type</h2>
                  <p className="card-tags">3D Lettering</p>
                </figcaption>
              </figure>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
