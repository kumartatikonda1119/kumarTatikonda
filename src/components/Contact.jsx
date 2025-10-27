import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxQMCeRsg5xlxIuFqOeWIUhLEOKruL4brfXbSaAx04b886gUCuqdOqw79MdK6t_5yep/exec";

    const formData = new FormData(e.target);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        setMsg("Message Sent Successfully");
        setTimeout(() => setMsg(""), 5000);
        e.target.reset(); // reset form
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setMsg("Failed to send message");
      });
  };

  return (
    <div id="contact" data-aos="fade-up">
      <div className="container">
        <div className="row2">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-solid fa-envelope-open-text"></i>{" "}
              kumartatikonda1119@gmail.com
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/kumar_tatikonda/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kumar-tatikonda-511180291/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/kumartatikonda1119"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://x.com/Kumar25783556"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/geetha.tatikonda.16"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="contact-right" data-aos="fade-up">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                data-aos="fade-up"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                data-aos="fade-up"
              />
              <textarea
                name="Message"
                placeholder="Your Message"
                required
                data-aos="fade-up"
              ></textarea>
              <button type="submit" className="btn btn2" data-aos="fade-up">
                Submit
              </button>
            </form>
            {msg && <span id="msg">{msg}</span>}
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © 2025 Kumar Tatikonda. Made with{" "}
            <i className="fa-solid fa-heart"></i> by Kumar Tatikonda. All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
