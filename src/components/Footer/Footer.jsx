import React from 'react';

import {
  Github,
  Gitlab,
  DevDotTo,
  Linkedin,
  Twitter,
  Instagram,
} from '@icons-pack/react-simple-icons';

import './Footer.scss';

function Footer() {
  return (
    <footer id="footer">
      <ul>
        <li>
          <a
            className="social github-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sepsol"
          >
            <Github color="#000" size={24} />
          </a>
        </li>
        <li>
          <a
            className="social gitlab-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/sepsol"
          >
            <Gitlab color="#000" size={24} />
          </a>
        </li>
        <li>
          <a
            className="social dev-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/sepsol"
          >
            <DevDotTo color="#000" size={32} />
          </a>
        </li>
        <li>
          <a
            className="social linkedin-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sepsol/"
          >
            <Linkedin color="#000" size={24} />
          </a>
        </li>
        <li>
          <a
            className="social twitter-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mr_sepsol"
          >
            <Twitter color="#000" size={24} />
          </a>
        </li>
        <li>
          <a
            className="social instagram-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/mr_sepsol/"
          >
            <Instagram color="#000" size={24} />
          </a>
        </li>
      </ul>
      <div className="copyright">
        Designed and developed by
        <br /> Sepehr Soltanieh
      </div>
    </footer>
  );
}

export default Footer;
