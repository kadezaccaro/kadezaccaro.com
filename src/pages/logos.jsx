import React from "react";

const Logos = () => {
  return (
    <div className="slide-fade-page-animation">
      <div className="centering">
        <h1 style={{ textAlign: "center", margin: 0 }}>Logofolio</h1>
      </div>
      <div className="centering" style={{ maxWidth: "100%", paddingTop: 0 }}>
        <div id="logos-grid">
          <img src="/logos/variant-v1.svg" alt="Variant" />
          <img src="/logos/variant-v2.svg" alt="Variant V2" />
          <img
            loading="lazy"
            src="/logos/yield-serif.svg"
            alt="Yield &amp; Co. serif"
          />
          <img
            loading="lazy"
            src="/logos/yield-script.svg"
            alt="Yield &amp; Co. script"
          />
          <img loading="lazy" src="/logos/kt-mark.svg" alt="KT mark" />
          <img loading="lazy" src="/logos/d-mark-v2.svg" alt="D Logomark" />
          <img loading="lazy" src="/logos/humility.svg" alt="Humility" />
          <img loading="lazy" src="/logos/quiver.svg" alt="Quiver" />
          <img loading="lazy" src="/logos/m-mark.svg" alt="M Logomark" />
          <img
            loading="lazy"
            src="/logos/ktype-script.svg"
            alt="Ktype script"
          />
          <img loading="lazy" src="/logos/zero-v2.svg" alt="Zero" />
          <img
            loading="lazy"
            src="/logos/diamond-house-mark.svg"
            alt="Diamond House Logomark"
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
