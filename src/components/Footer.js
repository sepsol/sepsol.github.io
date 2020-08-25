import React from 'react';
import './Footer.css';

import {
  Github,
  Gitlab,
  DevDotTo,
  Linkedin,
  Twitter,
  Instagram
} from '@icons-pack/react-simple-icons';

function Footer() {
  return (
    <footer id="footer">
      <ul>
        <li>
          <a
            class="social github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sepsol"
          >
            <Github color="#000" size={24} />
          </a>
        </li>
        <li>
          <a
            class="social gitlab"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/sepsol"
          >
            <Gitlab color="#000" size={24} />
          </a>
        </li>
        <li>
          <a
            class="social dev"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/sepsol"
          >
            <DevDotTo color="#000" size={32} />
          </a>
        </li>
        <li>
          <a
            class="social linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sepsol/"
          >
            <Linkedin color="#000" size={24} />
          </a>
        </li>
        <li>
          <a
            class="social twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mr_sepsol"
          >
            <Twitter color="#000" size={24} />
          </a>
        </li>
        <li>
          <a
            class="social instagram"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/mr_sepsol/"
          >
            <Instagram color="#000" size={24} />
          </a>
        </li>
      </ul>
      <div>
        Designed and built by
        <br /> Sepehr Soltanieh
      </div>
    </footer>
  );
}

export default Footer;
