import React from "react";

const GrandPlace = () => {
  return (
    <div className="slide-fade-page-animation">
      <div className="bg-light">
        <div className="centering" style={{ maxWidth: 704 }}>
          {/* <p
            style={{
              color: "#121212",
            }}
          >
            CASE STUDY &mdash;
          </p> */}
          <h1
            style={{
              color: "#121212",
            }}
          >
            Grand Place
          </h1>

          <p style={{ color: "#121212", marginTop: 0 }}>
            Grand Place Real Estate is a growing team with a mission to fulfill
            their clients' goals with seamless and trusting service.
          </p>
          <p style={{ color: "#121212" }}>
            With years of working under Keller Williams, it became clear to the
            owners that they needed to distinguish themselves from other teams
            at KW. Their brand was unrecognizable beyond the parent brokerage.
            Many realtors face this as they rely on templates for their brand,
            which results in everyone blending in with the competition.
          </p>
          <p style={{ color: "#121212" }}>
            <strong>Services Provided:</strong> Strategy, Naming, Identity
            Design, Typography &amp; Color, Brand Guidelines, Signage, Printed
            Material
          </p>
        </div>

        <img
          style={{ borderRadius: 0 }}
          src="grand_place/GrandPlace_StackedLogo.svg"
          alt="Grand Place stacked logotype"
        />

        <div className="centering" style={{ maxWidth: 704 }}>
          <h3 style={{ color: "#121212" }}>THE SOLUTION</h3>
          <p style={{ color: "#121212" }}>
            With a new identity, they wanted their brand to target a luxury
            market while still being approachable to first-home buyers. We
            worked together to create a full branding package, having a
            collaborative review at each step of the process.
          </p>

          <p style={{ color: "#121212" }}>
            <strong>Develop a brand identity system that:</strong>
          </p>
          <ul className="bullet-list" style={{ color: "#121212" }}>
            <li>
              Represents their professional image: modern, clean, premium,
              transparent.
            </li>
            <li>
              Appeals to high-end clients without feeling overly exclusive.
            </li>
            <li>
              Provides a polished experience that spans across all aspects of
              the business.
            </li>
          </ul>
        </div>

        <div className="centering" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <img
            loading="lazy"
            src="grand_place/GrandPlace_Logos_CaseStudy.webp"
            alt="Grand Place Primary and Secondary Logos"
          />
        </div>

        <div className="centering" style={{ maxWidth: 704 }}>
          <h3
            style={{
              color: "#121212",
            }}
          >
            BRAND NAMING
          </h3>
          <p style={{ color: "#121212" }}>
            Previously operating under their last name, I worked with the
            founders, George &amp; Page, to rename their company. The old name
            was difficult to remember, and they wanted a name to embrace them
            while they expand their team.
          </p>
          <p style={{ color: "#121212" }}>
            We were aiming for an ownable name that suggests both luxury and
            warmth to feel proud of—eventually landing on Grand Place. As an
            added charm, the owners love that their new business name happens to
            include their initials, G + P.
          </p>
        </div>

        <div className="centering" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <img
            loading="lazy"
            src="grand_place/gp-box-and-key.webp"
            alt="Grand Place Box and Key"
          />
        </div>

        <div className="centering" style={{ maxWidth: 704 }}>
          <h3
            style={{
              color: "#121212",
            }}
          >
            LOGO, TYPE &amp; COLOR
          </h3>
          <p style={{ color: "#121212" }}>
            Starting with concept sketches, many ideas are then explored and
            refined into a few of the best options to present to the client.
          </p>
          <p style={{ color: "#121212" }}>
            I knew I wanted to explore an option that emphasizes the founders'
            initials within the business name. I solved this with a custom 'GP'
            mark, used as a piece to the full logo. The paired logotype is a
            customized treatment of the brand's main typeface, Playfair Display.
            Poppins is used for body copy and other supporting text.
          </p>
          <p style={{ color: "#121212" }}>
            Throughout the process, I enjoy considering different scenarios
            where the logo may used. Branding in this way creates more
            optimization, having a dedicated logo for each purpose.
          </p>
        </div>

        <div className="centering" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <img
            loading="lazy"
            src="grand_place/gp-clearspace.webp"
            alt="Grand Place minimum clear space guides"
          />
          <img
            style={{ marginTop: 24 }}
            loading="lazy"
            src="grand_place/grandplace_colorpalette.webp"
            alt="Grand Place various logos color palette"
          />

          <img
            style={{ marginTop: 24 }}
            loading="lazy"
            src="grand_place/BrandGuide_Presentation_Letter.webp"
            alt="Grand Place brand guidelines"
          />
        </div>

        <div className="centering" style={{ maxWidth: 704 }}>
          <h3
            style={{
              color: "#121212",
            }}
          >
            SIGNAGE &amp; PRINTED MATERIAL
          </h3>

          <p style={{ color: "#121212" }}>
            With the industry's rules and regulations in mind, I began applying
            the new branding to custom signs and other printed material.
          </p>
        </div>

        <div className="centering" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div
            className="project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            <img
              loading="lazy"
              src="grand_place/GrandPlace_OpenHouseSign.svg"
              alt="Grand Place Small Sign"
            />
            <img
              loading="lazy"
              src="grand_place/GrandPlace_LargeSign.svg"
              alt="Grand Place Large Sign"
            />
          </div>

          <img
            style={{ marginTop: 24 }}
            loading="lazy"
            src="grand_place/gp-businesscard-rd2-option2.webp"
            alt="Grand Place Business Card Design"
          />
          <img
            style={{ marginTop: 24 }}
            loading="lazy"
            src="grand_place/gp-homesellersguide-mockup-v2.webp"
            alt="Grand Place Home Seller's Guide"
          />
          <img
            style={{ maxWidth: 704, margin: "0 auto" }}
            loading="lazy"
            src="grand_place/GrandPlace_Logomark_Color.webp"
            alt="Grand Place Logomark"
          />
        </div>
      </div>
    </div>
  );
};

export default GrandPlace;
