import React from 'react';

import './App.css';
import {
  Github,
  Gitlab,
  DevDotTo,
  Linkedin,
  Twitter,
  Instagram,
} from '@icons-pack/react-simple-icons';

function App() {
  return (
    <div className="App">

      <header>
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#work">WORK</a></li>
          </ul>
          <ul>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">RESUME</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="home">
          <h1>
            Hi, 👋<br/>
            I'm Sepehr,<br/>
            web developer.
          </h1>
          <h3>Get in touch 👉 <a href="mailto:sepsol@techie.com" target="_blank">sepsol@techie.com</a></h3>
        </section>
        
        <section id="about">
          <h2>About</h2>
          <p>Hello! I'm Sepehr, a full-stack software engineer and web developer based in San Francisco Bay Area, CA.</p>
          <p>I love tech and have been a tech-enthusiast since 7 years ago, and recently I decided to roll up my sleeves and be the builder of the things that have always interested me. During the past 4 years, I've founded and worked for different startups in various positions, which allowed me to meet many nice talented people and entrepreneurs.</p>
          <p>I have worked with a lot of popular software programs before becoming a developer and one of the most valuable skills I've learned from my past journey, is how to find high-quality resources and link myself to appropriate people to learn new skills. I recognize myself as a fast-learner, and you don't have to take my word for it! I was well-known at my university for my well-rounded research and presentation on various subjects. Plus, here's how my previous employer describes me in my recommendation letter:</p>
          <blockquote>
            We think that Sepehr has a high speed in learning programming concepts.
            <footer>Sina Maleki</footer>
          </blockquote>
          <p>As a software engineer, I enjoy using my skills to make innovative things that solve real-world problems and I love to bridge the gap between engineering and design.</p>
          <p>When I'm not working, I either watch YouTube for fun or to expand my knowledge, play with the UI/UX of other apps and try to come up with my twist on their concept, or sometimes play video games :)</p>
        </section>
        
        <section id="skills">
          <h2>Skills</h2>
          <p>I'm always working hard to expand my skill-set. Here are a few technologies I've been working with recently*:</p>
          <ul>
            <li>JavaScript (ES6) / TypeScript</li>
            <li>React.js / React Native</li>
            <li>Node.js</li>
            <li>Express.js / REST-ful APIs</li>
            <li>GraphQL / Apollo</li>
            <li>HTML & (S)CSS</li>
            <li>MongoDB / No-SQL</li>
            <li>MySQL / SQL</li>
          </ul>
          <footer>Other technologies I've worked with include but are not limited to Git / Bash / Chrome DevTools / Postman / Netlify / Heroku / Ngrok / Nodemon / Shopify Polaris / Formik / Yup / Fonk and outside the world of programming I've worked with Adobe Creative Cloud / Microsoft Office / Trimble SketchUp / McNeel Rhinoceros / Autodesk Products</footer>
        </section>
        
        <section id="work">
          <h2>Work</h2>
        </section>
        
        <section id="wip">
          <img src={require("./assets/gif/working-on-it.gif")} />
        </section>
      </main>
      
      <footer id="footer">
        <ul>
          <li><a class="social github" target="_blank" href="https://github.com/sepsol"><Github color="#000" size={24}/></a></li>
          <li><a class="social gitlab" target="_blank" href="https://gitlab.com/sepsol"><Gitlab color="#000" size={24}/></a></li>
          <li><a class="social dev" target="_blank" href="https://dev.to/sepsol"><DevDotTo color="#000" size={32}/></a></li>
          <li><a class="social linkedin" target="_blank" href="https://www.linkedin.com/in/sepsol/"><Linkedin color="#000" size={24}/></a></li>
          <li><a class="social twitter" target="_blank" href="https://twitter.com/mr_sepsol"><Twitter color="#000" size={24}/></a></li>
          <li><a class="social instagram" target="_blank" href="https://www.instagram.com/mr_sepsol/"><Instagram color="#000" size={24}/></a></li>
        </ul>
        <div>Designed and built by<br/> Sepehr Soltanieh</div>
      </footer>
      
    </div>
  );
}

export default App;
