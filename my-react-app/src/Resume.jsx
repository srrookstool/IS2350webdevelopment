import React from "react";

export function Header() {
  return (
    <header className="resume-header">
      <h1>Your Name</h1>
      <p>Job Title / Tagline</p>
      <p>srookstool@icloud.com | (765) 414-2178 | Fort Wayne, IN</p>
    </header>
  );
}

export function Summary() {
  return (
    <section className="resume-summary">
      <h2>Summary</h2>
      <p>Information Systems major with a passion for web development and a strong foundation in programming and systems analysis.</p>
    </section>
  );
}

export function Experience() {
  return (
    <section className="resume-experience">
      <h2>Experience</h2>
      <ul>
        <li>IT Assistant — Harrison High School (2022 – 2024)</li>
      </ul>
    </section>
  );
}

export function Education() {
  return (
    <section className="resume-education">
      <h2>Education</h2>
      <ul>
        <li>Information Systems B.S. — Indiana Institute of Technology (2027)</li>
      </ul>
    </section>
  );
}

export function Skills() {
  return (
    <section className="resume-skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
        <li>SQL</li>
      </ul>
    </section>
  );
}

