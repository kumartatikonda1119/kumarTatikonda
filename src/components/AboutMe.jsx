import React, { useState } from "react";
import "./AboutMe.css";
import kumar from "../assets/KumarPassportsizePhoto.png";


function AboutMe() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="about" data-aos="fade-up">
      <h1 className="subtitle">About Me</h1>
      <div className="container">
        <div className="row1">
          <div className="about-col-1">
            <img src={kumar} alt="Profile" />
          </div>
          <div className="about-col-2" data-aos="fade-up">
            <br />
            <p>
              I'm Kumar Swamy Tatikonda, a passionate Third Year Computer
              Science student specializing in Artificial Intelligence and
              Machine Learning at Aditya College of Engineering and Technology.
              Driven by curiosity, I push the boundaries of technology and
              strive to excel in every phase of my academic journey.
              <br />
              <br />
              Outside the classroom, I'm actively involved in coding
              competitions, hackathons, and open-source projects, applying my
              knowledge to real-world challenges. I believe in continuous
              learning, always adapting to stay ahead in this rapidly evolving
              field.
              <br />
              <br />
              Beyond tech, I enjoy running to stay fit, playing battle royale
              games for fun, and sharpening my mind with chess. Music is my
              source of relaxation, and I love discovering new genres. I’m
              always open to connecting, collaborating on projects, or just
              sharing insights. Let’s make a positive impact together!
            </p>

            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
              <p
                className={`tab-links ${
                  activeTab === "hobbies" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("hobbies")}
              >
                Hobbies
              </p>
            </div>

            {/* Tab Contents */}
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span>Problem Solving</span>
                  <br />
                  Strong Problem solving ability demonstrated through
                  Competitive Programming
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Good at HTML, CSS and little proficiency in JS
                </li>
                <li>
                  <span>DSA</span>
                  <br />
                  Able to solve Mid-range DSA Problems
                </li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>2023-2027</span>
                  <br />
                  B.TECH (CSE-AIML) AT Aditya College of Engineering and
                  Technology
                </li>
                <li>
                  <span>2021-2023</span>
                  <br />
                  Intermediate AT Sri Chaitanya College
                </li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "hobbies" ? "active-tab" : ""
              }`}
              id="hobbies"
            >
              <ul>
                <li>
                  <span>Running</span>
                  <br />
                  Enjoy Running for fitness
                </li>
                <li>
                  <span>Gaming</span>
                  <br />
                  Enthusiastic about playing competitive battle royale games
                </li>
                <li>
                  <span>Chess</span>
                  <br />
                  Enjoy playing chess as a mental exercise and strategy game
                </li>
                <li>
                  <span>Coding & Problem Solving</span>
                  <br />
                  Engage in daily problem solving, competitive programming, and
                  technologies like HTML and CSS.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
