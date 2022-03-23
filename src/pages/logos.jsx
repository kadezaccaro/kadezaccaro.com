import React from "react";

const Logos = () => {
  return (
    <div className="fade-page-animation">
      <div className="centering">
        <h1 style={{ textAlign: "center", margin: 0 }}>Logofolio</h1>
      </div>
      <div className="centering" style={{ maxWidth: "100%", paddingTop: 0 }}>
        <div id="logos-grid">
          <img
            src="/logos/variant-v1.svg"
            alt='"Variant" slanted brush script'
          />
          <img
            src="/logos/variant-v2.svg"
            alt='"Variant" alternative brush script with arched baseline'
          />

          <img
            src="/logos/our-musings.svg"
            alt='"Our Musings" slanted formal script with flourishes'
          />
          <img
            src="/logos/our-musings-mark.svg"
            alt='"OM" script monogram with stars'
          />

          <img
            loading="lazy"
            src="/logos/yield-serif.svg"
            alt='"Yield &amp; Co." slanted serif with an American flag symbol'
          />
          <img
            loading="lazy"
            src="/logos/yield-script.svg"
            alt='Alternative "Yield" slanted script'
          />

          <img
            loading="lazy"
            src="/logos/kt-mark.svg"
            alt='"KT" gothic monogram'
          />
          <img
            loading="lazy"
            src="/logos/d-mark-v2.svg"
            alt='"D" slanted brush script logomark'
          />

          <img
            loading="lazy"
            src="/logos/humility.svg"
            alt='"Humility" friendly script with a tagline that says "a provisions company"'
          />
          <img
            loading="lazy"
            src="/logos/quiver.svg"
            alt='"Quiver" slanted script with disconnected letters'
          />

          <img
            loading="lazy"
            src="/logos/m-mark.svg"
            alt='"M" slanted brush script logomark'
          />
          <img
            loading="lazy"
            src="/logos/ktype-script.svg"
            alt='"Ktype" upright brush script'
          />

          <img
            loading="lazy"
            src="/logos/zero-v2.svg"
            alt='"Zero" monoline script with arched baseline'
          />
          <img
            loading="lazy"
            src="/logos/diamond-house-mark.svg"
            alt="Diamond inside of a pentagon house shape with a sunburst effect"
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
