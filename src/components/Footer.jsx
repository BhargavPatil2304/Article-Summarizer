import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex items-center justify-center space-x-10">
        <a
          href="https://www.instagram.com/bhargavpatil_23/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-blue-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/bhargavpatil23/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-blue-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/BhargavPatil2304"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-blue-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
