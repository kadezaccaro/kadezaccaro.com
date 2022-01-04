import React from "react";

const Contact = () => {
  return (
    <div className="slide-fade-page-animation">
      <div className="centering" style={{ maxWidth: 704 }}>
        <h1>Contact</h1>
        <p style={{ margin: 0, marginBottom: 40 }}>
          Please email{" "}
          <a href="mailto:hi@kadezaccaro.com">hi@kadezaccaro.com</a> or use the
          form below. Keep in touch!
        </p>

        <form action="https://formsubmit.co/hi@kadezaccaro.com" method="POST">
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="hidden"
            name="_subject"
            value="New contact form submission!"
          />

          <input
            type="hidden"
            name="_next"
            value="https://kadezaccaro.com/success"
          />

          <label for="name">Name</label>
          <input name="name" type="text" className="short-answer" required />

          <label for="email">Email</label>
          <input name="email" type="email" className="short-answer" required />

          <label for="message">Message</label>
          <textarea
            name="message"
            style={{ height: 200 }}
            className="long-answer"
            required
          ></textarea>

          <button type="submit" className="submit">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
