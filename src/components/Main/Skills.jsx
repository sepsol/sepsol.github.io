import React from 'react'
import './Skills.scss'

function Skills() {
  return (
    <div>
      <div className="skills-subsection-wrapper">
        <div 
          id="programming-languages"
          className="skills-subsection"
        >
          <h4>Programming <br/>Languages</h4>
          <ul>
            <li>JavaScript (ES6)</li>
            <li>TypeScript</li>
            <li>Dart</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS/Sass</li>
          </ul>
        </div>
        <div 
          id="libraries-and-frameworks"
          className="skills-subsection"
        >
          <h4>Libraries & <br/>Frameworks</h4>
          <ul>
            <li>React.js</li>
            <li>React Native</li>
            <li>Jest</li>
            <li>Flutter</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div 
          id="tools-and-platforms"
          className="skills-subsection"
        >
          <h4>Tools & <br/>Platforms</h4>
          <ul>
            <li>Git</li>
            <li>Bash</li>
            <li>Docker</li>
            <li>Apollo</li>
            <li>Postman</li>
            <li>Chrome DevTools</li>
            <li>Shopify Polaris</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div 
          id="backend-and-database"
          className="skills-subsection"
        >
          <h4>Backend & <br/>Database</h4>
          <ul>
            <li>Node.js</li>
            <li>GraphQL</li>
            <li>Express.js/REST</li>
            <li>MongoDB/No-SQL</li>
            <li>MySQL/SQL</li>
          </ul>
        </div>
      </div>
      <footer>
        Other technologies I've worked with include but are not limited to 
        Ngrok, Nodemon, Formik, Yup, and Fonk. 
        Outside the world of programming I've worked with  
        Photoshop, Illustrator, InDesign, and XD from Adobe Creative Cloud,
        Jira project management software, and Microsoft Office. 
        I also have experience in 3D and CAD design with Trimble SketchUp, 
        McNeel Rhinoceros, and Autodesk Products. 
      </footer>    
    </div>
  )
}

export default Skills
