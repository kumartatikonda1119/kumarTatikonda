import React from "react";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import bootstrap from "../assets/bootstrap.jpg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import sql from "../assets/sql.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import "./Skills.css";
function Skills() {
  return (
    <>
      <div id="skills-arsenal" data-aos="fade-down">
        <h1 className="subtitle">Tech Armory</h1>
        <div className="arsenal-grid">
          <div className="arsenal-box" data-aos="zoom-in">
            <h2>Programming Languages</h2>
            <div className="arsenal-icons">
              <img src={c} alt="C" />
              <img src={cpp} alt="C++" />
              <img src={java} alt="Java" />
              <img src={python} alt="Python" />
            </div>
          </div>
          <div className="arsenal-box" data-aos="zoom-in">
            <h2>Frontend</h2>
            <div className="arsenal-icons">
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={js} alt="JavaScript" />
              <img src={bootstrap} alt="JavaScript" />
              <img src={react} alt="React" />
            </div>
          </div>
          <div className="arsenal-box" data-aos="zoom-in">
            <h2>Backend</h2>
            <div className="arsenal-icons">
              <img src={nodejs} alt="Node.js" />
              <img src={express} alt="Express.js" />
              <img src={sql} alt="MySQL" />
            </div>
          </div>
          <div className="arsenal-box">
            <h2>Tools</h2>
            <div className="arsenal-icons">
              <img src={git} alt="Git" />
              <img src={github} alt="GitHub" />
              <img src={vscode} alt="VsCode" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
