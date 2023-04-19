import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FiDribbble } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
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
  );
};

export default HeaderSocials;
