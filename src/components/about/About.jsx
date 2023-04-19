import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img
            src={ME}
            alt="About image"
          />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>300+ worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Project</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            illum voluptatem odit veritatis, voluptatibus debitis iste hic
            adipisci, officia architecto nulla voluptas quis exercitationem
            perferendis qui dolorum eum numquam facilis!
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
