import React from 'react'
import "./Hero.css"
import kumar from "../assets/kumar.png"
function Hero() {

  return (
    <>
      <section className="hero" data-aos="fade-down">
        <div className="hero-left" data-aos="fade-left">
          <h2 className="hero-role" data-aos="slide-up">
            {" "}
            Competitive Programmer <br />
            Full Stack Developer
          </h2>
          <h1 className="hero-title" data-aos="slide-up">
            Ciao!!,
            <br />
            I'm Kumar Tatikonda
          </h1>
          <div className="hero-actions">
            <div className="social-icons">
              <a
                href="https://www.instagram.com/kumar_tatikonda/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kumar-tatikonda-511180291/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a href="https://github.com/kumartatikonda1119" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1G6Eqr-Ykggk4JiXS94067ydK7sAkX1Tb/view?usp=sharing"
              target="_blank"
              className="btn-resume"
            >
              See My Resume
            </a>
          </div>
        </div>
        <div className="hero-right" data-aos="fade-right">
          <div className="hero-img-circle">
            <img src={kumar} alt="Kumar" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero