import React from "react";
import "./Projects.css";

// Import images
import levelupdev from "../assets/levelupdev.png";
import weather from "../assets/weather.png";
import calculator from "../assets/calculator.jpg";
import todolist from "../assets/todolist.jpg";
import stopwatch from "../assets/stopwatch.jpg";
import movie from "../assets/movie.jpg";
import finmate from "../assets/finmate.png";
import lottery from "../assets/lottery.webp";
import youtube from "../assets/youtube.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Level Up Dev",
      desc: "A personal portfolio website showcasing my work and skills.",
      img: levelupdev,
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      live: "https://level-updev.netlify.app/",
      code: "https://github.com/kumartatikonda1119/LevelUpDev",
    },
    {
      id: 2,
      title: "Weather App",
      desc: "A simple weather app that fetches real-time weather data using OpenWeather API.",
      img: weather,
      tech: ["HTML", "CSS", "JavaScript", "API"],
      live: "https://kumartatikonda1119.github.io/TheWeatherApp/",
      code: "https://github.com/kumartatikonda1119/TheWeatherApp",
    },
    {
      id: 3,
      title: "Calculator",
      desc: "A simple and responsive calculator for basic arithmetic operations.",
      img: calculator,
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://kumartatikonda1119.github.io/The-Calculator/",
      code: "https://github.com/kumartatikonda1119/The-Calculator",
    },
    // {
    //   id: 4,
    //   title: "ToDo List",
    //   desc: "Organize your tasks efficiently with this interactive ToDo List app.",
    //   img: todolist,
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   live: "https://kumartatikonda1119.github.io/TheTodoList/",
    //   code: "https://github.com/kumartatikonda1119/TheTodoList",
    // },
    {
      id: 5,
      title: "Stop Watch",
      desc: "Track time precisely with a clean and easy-to-use stopwatch application.",
      img: stopwatch,
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://kumartatikonda1119.github.io/TheStopWatch/",
      code: "https://github.com/kumartatikonda1119/TheStopWatch",
    },
    {
      id: 6,
      title: "Movie Review Analysis",
      desc: "Analyze and visualize movie reviews using sentiment analysis and interactive visual dashboards.",
      img: movie,
      tech: [
        "Python",
        "Flask",
        "Pandas",
        "NLP",
        "Scikit-Learn",
        "React",
        "Chart.js",
      ],
      live: "https://moviereviewanalysis.onrender.com/",
      code: "https://github.com/kumartatikonda1119/ReviewAnalysis",
    },
    {
      id: 7,
      title: "FinMate",
      desc: "Know about finances and track expenses with the smart budgeting tool.",
      img: finmate,
      tech: ["HTML", "CSS"],
      live: "https://kumartatikonda1119.github.io/The-FinMate/",
      code: "https://github.com/kumartatikonda1119/The-FinMate",
    },
    {
      id: 9,
      title: "YouTube Clone",
      desc: "Looks like YouTube, but you won’t get any subscribers here!",
      img: youtube,
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://kumartatikonda1119.github.io/The-YouTube-Clone/",
      code: "https://github.com/kumartatikonda1119/The-YouTube-Clone",
    },
  ];

  return (
    <section id="projects" data-aos="fade-up">
      <div className="container">
        <h1 className="subtitle">Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" data-aos="zoom-in">
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project"
                >
                  Live Preview
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project btn-outline"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
