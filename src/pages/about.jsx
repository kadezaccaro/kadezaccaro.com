import React from "react";

const About = () => {
  return (
    <div className="slide-fade-page-animation">
      <div className="centering" style={{ paddingBottom: 0 }}>
        <h1 className="intro" style={{ margin: 0 }}>
          I'm Kade,{" "}
          <span className="strikethrough">
            a<strong> Designer</strong> &amp;{" "}
            <strong>Front-End Developer.</strong>
          </span>
          <br></br>a <strong>Human Being.</strong>
        </h1>
      </div>

      <div className="centering" style={{ maxWidth: 704, paddingBottom: 0 }}>
        <p style={{ margin: 0 }}>
          My work is dedicated to designing thoughtful experiences. This means
          that I ask questions, brainstorm, plan approaches, and build enduring
          solutions.
        </p>
        <p>
          My introduction to design came at a young age with strong ambitions to
          learn and create high-quality work. Over the years, these ambitions
          continue to drive my projects as I look forward to continuous growth.
        </p>
        <p>
          Apart from design work, I enjoy coding, exercising, video games, my
          cat, and learning American Sign Language!
        </p>
        <p>
          I’m currently exploring new opportunities and available for freelance.
          I'd love to hear from you &mdash;{" "}
          <a href="mailto:hi@kadezaccaro.com">hi@kadezaccaro.com</a>.
        </p>
      </div>

      <div className="centering" style={{ paddingBottom: 0 }}>
        <div className="row">
          <div className="column left">
            <img
              style={{ margin: 0 }} // Prevent top image from having unnecessary space
              loading="lazy"
              src="/about/kt-profile.webp"
              alt="Headshot of Kade Zaccaro"
            />
            <img
              loading="lazy"
              src="/about/z-roll.webp"
              alt="Brown cat on its back rolling in the sun"
            />
          </div>
          <div className="column right">
            <img
              style={{ margin: 0 }} // Prevent top image from having unnecessary space
              loading="lazy"
              src="/about/z-stretch.webp"
              alt="Cat stretching outside"
            />
          </div>
        </div>
      </div>

      <div className="centering">
        <h2>Certifications</h2>
        <hr className="spacer-line" />

        <h3 className="cert-title">Responsive Web Design Certificate</h3>
        <p className="cert-info">freeCodeCamp &mdash; August 2021</p>
        <hr className="spacer-line" />

        <h3 className="cert-title">
          JavaScript Algorithms and Data Structures Certificate
        </h3>
        <p className="cert-info">freeCodeCamp &mdash; September 2021</p>
        <hr className="spacer-line" />

        <h3 className="cert-title">
          Front-End Development Libraries Certificate
        </h3>
        <p className="cert-info">freeCodeCamp &mdash; October 2021</p>
        <hr className="spacer-line" />

        {/* <h3 className="cert-title">Data Visualization Certificate</h3>
        <p className="cert-info">freeCodeCamp &mdash; November 2021</p>
        <hr className="spacer-line" /> */}

        <h3 className="cert-title">Foundations of User Experience Design</h3>
        <p className="cert-info">Google &mdash; May 2022</p>
        <hr className="spacer-line" />
      </div>
    </div>
  );
};

export default About;
