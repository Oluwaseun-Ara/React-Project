import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FiDribbble } from "react-icons/fi";
const footer = () => {
  return (
    <footer>
      <a
        href="#"
        className="footer_logo"
      >
        ARCH
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="http://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="http://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="http://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDribbble />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Designer team</small>
      </div>
    </footer>
  );
};

export default footer;
