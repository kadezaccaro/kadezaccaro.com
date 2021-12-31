import React from "react";

const Success = () => {
  return (
    <div className="slide-fade-page-animation">
      <div
        style={{
          minHeight: "calc(100vh - 112px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0px 16px 0px 16px",
        }}
      >
        <h1>Thanks for reaching out!</h1>
        <p style={{ margin: 0 }}>
          We'll be in touch as soon as possible. I do my best to respond within
          24 hours.
        </p>
      </div>
    </div>
  );
};

export default Success;
