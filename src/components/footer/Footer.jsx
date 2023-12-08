import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const twitterUrl = 'https://twitter.com/mainikhilhun';
    const instaUrl = 'https://instagram.com/nikhilsingh.dev';
    const linkedInUrl = 'https://www.linkedin.com/in/nikhil-singh-in/';
    const gitHubUrl = 'https://github.com/nikhilkcodes';

    const handleRedirect = (url) => {
      window.location.href = url;
    };

    return (
      <footer className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
          </ul>
          <div className="infoText">
            Welcome to my Movie Database, a dynamic web application showcasing my expertise in React and API integration. This project utilizes The Movie Database (TMDb) API to provide users with a seamless and interactive experience for exploring a vast collection of movies. From details about popular releases to in-depth information on your favorite films, this database offers a user-friendly interface and responsive design. Dive into the world of cinema with this personalized movie hub, developed to highlight my passion for front-end development and creativity in building engaging web applications.
          </div>
          <div className="socialIcons">
            <span className="icon" onClick={() => handleRedirect(gitHubUrl)}>
              <FaGithub />
            </span>
            <span className="icon" onClick={() => handleRedirect(instaUrl)}>
              <FaInstagram />
            </span>
            <span className="icon" onClick={() => handleRedirect(twitterUrl)}>
              <FaTwitter />
            </span>
            <span className="icon" onClick={() => handleRedirect(linkedInUrl)}>
              <FaLinkedin />
            </span>
          </div>
        </ContentWrapper>
      </footer>
    );
  };

export default Footer;
