import React from "react";

const Lettering = () => {
  return (
    <div className="fade-page-animation">
      <div className="bg-light">
        <div className="centering">
          <h1 style={{ textAlign: "center", margin: 0, color: "#121212" }}>
            Lettering Collection
          </h1>
        </div>

        <div className="centering" style={{ maxWidth: 1800, paddingTop: 0 }}>
          <div className="project-flex-container">
            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/truth-will-last.svg"
                alt='"Truth Will Last" bouncing brush script'
              />
            </div>
            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/artiswork.webp"
                alt='"Art is Work" elegant formal script combined with a bold serif style'
              />
            </div>

            <div className="project-flex-item">
              <img
                loading="lazy"
                src="/lettering/thanks.svg"
                alt='"Thanks!" elegant formal script with large circular flourishes'
              />
            </div>

            <div className="project-flex-item">
              <picture>
                <source srcSet="/lettering/be-brave.webp" type="image/webp" />
                <source srcSet="/lettering/be-brave.png" type="image/png" />
                <img
                  loading="lazy"
                  src="/lettering/be-brave.png"
                  alt='"Be Brave" disconnected script with arched baseline'
                />
              </picture>
            </div>

            <div className="project-flex-item">
              <img
                loading="lazy"
                src="/lettering/pressure.svg"
                alt='"Pressure" slanted bouncing brush script'
              />
            </div>

            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/loosenup.svg"
                alt='"Loosen Up" slanted bouncing brush script'
              />
            </div>
            <div className="project-flex-item col-2">
              <img
                style={{
                  maxWidth: "80%",
                  margin: "0 auto",
                }}
                loading="lazy"
                className="rotate"
                src="/lettering/letter-n.svg"
                alt='"N" with unique flourishes spinning around'
              />
            </div>

            <div className="project-flex-item col-2 big">
              <img
                loading="lazy"
                src="/lettering/jfs.svg"
                alt='"Just F*cking Start" slanted formal script with flourishes'
              />
            </div>
            <div className="project-flex-item col-2 small">
              <figure>
                <img
                  loading="lazy"
                  src="/lettering/typism-book-feature.webp"
                  alt="Opened book showcasing featured work"
                />
                <figcaption className="caption" style={{ color: "#121212" }}>
                  I'm excited to have my work published in{" "}
                  <strong>Typism Book 6</strong> among so many admirable
                  artists!
                </figcaption>
              </figure>
            </div>

            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/sunday.svg"
                alt='"Sunday" slanted brush script'
              />
            </div>
            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/refine.svg"
                alt='"Refine" bouncing brush script'
              />
            </div>

            <img
              loading="lazy"
              src="/lettering/altruism.svg"
              alt='"Altruism" in all caps with slanted serif style'
            />

            <div className="project-flex-item col-4">
              <img
                loading="lazy"
                src="/lettering/letter-a.svg"
                alt='"Letter A" unique high-contrast style'
              />
            </div>
            <div className="project-flex-item col-4">
              <img
                loading="lazy"
                src="/lettering/letter-b.svg"
                alt='"Letter B" blackletter'
              />
            </div>
            <div className="project-flex-item col-4">
              <img
                loading="lazy"
                src="/lettering/letter-c.svg"
                alt='"Letter C" slanted brush script'
              />
            </div>
            <div className="project-flex-item col-4">
              <img
                loading="lazy"
                src="/lettering/letter-d.svg"
                alt='"Letter D" slanted brush script'
              />
            </div>

            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/ubn-collection.webp"
                alt='"Undefined By Numbers" in all caps with paintbrush texture'
              />
            </div>
            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/t-flourished.svg"
                alt='"Letter T" capitalized and bold with a lot of decorative flourishes'
              />
            </div>

            <div className="project-flex-item">
              <img
                loading="lazy"
                src="/lettering/communicate.svg"
                alt='"Communicate" elegant formal script with large flourishes'
              />
            </div>

            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/faux.svg"
                alt='"Faux" slanted brush script'
              />
            </div>
            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/surreal.svg"
                alt='"Surreal" backslanted monoline script'
              />
            </div>

            <div className="project-flex-item">
              <img
                loading="lazy"
                src="/lettering/rebuild.svg"
                alt='"Rebuild" elegant formal script with arched baseline'
              />
            </div>

            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/balance.svg"
                alt='"Balance" slanted script with arched baseline'
              />
            </div>
            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/rhythm.svg"
                alt='"Rhythm" slanted brush script with aggressive style'
              />
            </div>

            <div className="project-flex-item col-2">
              <img
                loading="lazy"
                src="/lettering/our-musings.svg"
                alt='"Our Musings" formal script with flourishes'
              />
            </div>
            <div className="project-flex-item col-2">
              <img
                style={{
                  alignSelf: "center",
                  maxWidth: "65%",
                  margin: "0 auto",
                }}
                loading="lazy"
                src="/lettering/letter-l.svg"
                alt='"Letter L" monoline script'
              />
            </div>

            <div className="project-flex-item">
              <img
                loading="lazy"
                src="/lettering/dr-lecter.svg"
                alt='"Dr. Lecter" in all caps with experimental gothic serif style'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lettering;
