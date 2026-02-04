import React, { useEffect } from "react";
import "./App.css";
import profileImg from "./Images/emojie.png";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDatabase,
  FaEye,
  FaGlobe
} from "react-icons/fa";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".links a");

    const handleScroll = () => {
      let fromTop = window.scrollY + 150;

      navLinks.forEach(link => {
        if (link.hash && link.hash.startsWith("#")) {
          let section = document.querySelector(link.hash);
          if (
            section &&
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <div className="portfolio-wrapper">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="section hero">
        <div className="hero-container">
          
          {/* النص */}
          <div className="hero-content">
            <h2 className="hero-welcome">Hello World</h2>
            <h1 className="hero-title">I'M Reem Alharthi</h1>
            <h3 className="hero-subtitle">Computer Science Student</h3>
            <p className="hero-desc">
              Interested in <strong>Web Development</strong> and passionate about learning and growing in the field of <strong>Computing</strong>.
            </p>
          </div>

          {/* الصورة */}
          <div className="hero-image">
            <img src={profileImg} alt="Reem Alharthi" />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            Third-year Computer Science student at Umm Al-Qura University. Passionate about web development and continuously striving to enhance my technical skills through hands-on projects and self-learning. Proficient in the fundamentals of HTML, CSS, and JavaScript, and currently expanding my knowledge in modern frameworks like React and Node.js.
<br></br> My passion lies in building interactive web applications and innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="section skills-left-section">

  <div className="skills-left-card">

    {/* العنوان */}
    <div className="skills-left-title">
      <span>|</span> My Skills
    </div>

    {/* الأيقونات */}
    <div className="skills-icons-grid">
      <div className="skill-box">
        <FaPython />
        <p>Python</p>
      </div>

      <div className="skill-box">
        <FaJs />
        <p>JavaScript</p>
      </div>

      <div className="skill-box">
        <FaHtml5 />
        <p>HTML</p>
      </div>

      <div className="skill-box">
        <FaCss3Alt />
        <p>CSS</p>
      </div>

      <div className="skill-box">
        <FaJava />
        <p>Java</p>
      </div>

      <div className="skill-box">
        <FaDatabase />
        <p>SQL</p>
      </div>

      <div className="skill-box">
        <FaEye />
        <p>Computer Vision</p>
      </div>

      <div className="skill-box">
        <FaGlobe />
        <p>Web Development</p>
      </div>
    </div>

  </div>
</section>

{/* Projects Section */}
<section id="projects" className="section">
  <h2 className="section-title">Projects</h2>

  <div className="projects-grid">

    <ProjectCard
      title="Interactive Game Development Using Computer Vision"
      description={
        <>
          Developed a Subway Surfers-inspired game where the character is
          controlled using real-time body movements captured by the camera.
          <br /><br />
          <strong>Technologies:</strong> Python, OpenCV, PyAutoGUI, MediaPipe
        </>
      }
    />

    <ProjectCard
      title="SDAIA Database Design Project"
      description={
        <>
          Designed a relational database model for managing departments,
          employees, projects, and tasks with integrity constraints.
          <br /><br />
          <strong>Core Concepts:</strong> ER Modeling, Normalization, SQL
        </>
      }
    />

    <ProjectCard
      title="Tech Way – Front-End Project"
      description={
        <>
          Built a web platform to guide beginners in exploring tech career paths,
          including quizzes and learning roadmaps.
          <br /><br />
          <strong>Technologies:</strong> HTML, CSS, JavaScript
        </>
      }
    />

  </div>
</section>


{/* Contact Section */}
<section id="contact" className="section contact-section">
  <h2 className="section-title">Contact Me</h2>

  <div className="contact-icons">
    <a
      href="https://www.linkedin.com/in/reemfalharthi"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://github.com/reemfdev"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <FaGithub />
    </a>

    <a
      href="https://mail.google.com/mail/u/0/?hl=ar#search/reem.falharthii%40gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <FaEnvelope />
    </a>
  </div>
</section>
{/* Footer */}
<footer className="site-footer">
  <p>© 2026 Reem Alharthi</p>
</footer>

    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>

      </div>
    </nav>
  );
}
function ProjectCard({ title, description }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="project-card-glass">
      <h3>{title}</h3>

      <button
        className="project-toggle-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Details" : "View Details"}
      </button>

      {open && <p className="project-desc-glass">{description}</p>}

    </div>
  );
}

export default App;
