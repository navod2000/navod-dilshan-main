import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* Header */}
      <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1>
                  <span>N</span>avod <span>D</span>ilshan
                </h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li><a href="#hero" data-after="Home">Home</a></li>
                <li><a href="#skills" data-after="Skills">Skills</a></li>
                <li><a href="#projects" data-after="Projects">Projects</a></li>
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero container">
          <div>
            <h1>Hello, <span></span></h1>
            <h1>My Name is <span></span></h1>
            <h1>Navod <span></span></h1>
            <h2>UI/UX Designer & Developer <span></span></h2>
            <a href="#projects" className="cta">Portfolio</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="skills container">
          <div className="skills-bottom">
            <h1 className="section-title">sk<span>il</span>ls</h1>
            <p>
              I possess a diverse skill set in software engineering, specializing in web development and UI design.
              ...
            </p>
          </div>
          <div className="skills-center">
            <div className="skills-item">
              <h2>UI/UX Design</h2>
              <p>Skilled in creating intuitive and visually appealing interfaces using Figma...</p>
            </div>
            <div className="skills-item">
              <h2>Programming Languages</h2>
              <p>Proficient in Java, JavaScript, Python, PHP, Flutter, C, and C++...</p>
            </div>
            <div className="skills-item">
              <h2>Web Technologies</h2>
              <p>Knowledgeable in HTML, CSS, and Bootstrap...</p>
            </div>
            <div className="skills-item">
              <h2>Web Development</h2>
              <p>Proficient in building responsive and dynamic websites using HTML, CSS, JavaScript...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title">Recent <span>Projects</span></h1>
          </div>
          <div className="all-projects">
            {/* Project Item */}
            <div className="project-item">
              <div className="project-info">
                <h1>Project 1</h1>
                <h2>Smart Home UI</h2>
                <p>Creating UIs and prototypes using Figma for a smart home app...</p>
              </div>
              <div className="project-img">
                <img src="./img/shome.png" alt="Smart Home UI" />
              </div>
            </div>
            {/* Repeat other project items similarly */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img">
              <img src="./img/123.jpg" alt="Navod Dilshan" />
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">About <span>me</span></h1>
            <h2>UI/UX Designer and Developer</h2>
            <p>Navod Dilshan is a dedicated software engineering undergraduate...</p>
            <a href="resume.pdf" className="cta" download>Download Resume</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact container">
          <div>
            <h1 className="section-title">Contact <span>info</span></h1>
          </div>
          <div className="contact-items">
            {/* Contact Item */}
            <div className="contact-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="Phone Icon" />
              </div>
              <div className="contact-info">
                <h1>Phone</h1>
                <h2>0775622214</h2>
                <h2>0725622214</h2>
              </div>
            </div>
            {/* Repeat other contact items similarly */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <div className="footer container">
          <div className="brand">
            <h1><span>N</span>avod <span>D</span>ilshan</h1>
          </div>
          <h2>Your Complete Web Solution</h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="https://www.facebook.com/navod.dilshan.14" target="_blank" rel="noopener noreferrer">
                <img src="./img/facebook.png" alt="Facebook Icon" />
              </a>
            </div>
            {/* Repeat other social items similarly */}
          </div>
          <p>Copyright © 2024 Navod. All rights reserved</p>
        </div>
      </section>
    </div>
  );
};

export default App;
