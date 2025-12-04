import "./About.css";
import Avatar from "../../assets/avatar-placeholder.jpg";

function About() {
  return (
    <section className="about">
      <img src={Avatar} alt="author avatar" className="about__avatar" />
      <div className="about__block">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          I'm currently transitioning into a software developer role after
          almost a decade of being a professional Aviation Technician. Through
          TripleTen, I've learned valuable skills in HTML, CSS, JavaScript, and
          React, and I'm excited to apply these skills in real-world projects.
          I'm passionate about continuous learning and eager to contribute to
          innovative development teams.
        </p>
      </div>
    </section>
  );
}

export default About;
