import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';

import ConditionalWrapper from '../Helpers/ConditionalWrapper';
import SectionTitle from './SectionTitle';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import Skills from './Skills'
import Works from './Works';
// import WIP from './WIP';

import './Main.scss';

function Main() {
  const largeScreen = useMediaQuery('(min-width: 800px)');

  return (
    <main>
      <section id="home">
        <ConditionalWrapper
          condition={largeScreen}
          wrapper={children => <Bounce cascade>{children}</Bounce>}
        >
          <h1>
            <div>
              Hi,{' '}
              <span role="img" aria-label="waving hand emoji">
                👋
              </span>
            </div>
            <div>I'm Sepehr,</div>
            <div>web developer.</div>
          </h1>
        </ConditionalWrapper>
        <ConditionalWrapper
          condition={largeScreen}
          wrapper={children => <Fade>{children}</Fade>}
        >
          <h5>
            Get in touch{' '}
            <span role="img" aria-label="hand emoji pointing to the right">
              👉
            </span>{' '}
            <a
              href="mailto:sepsol.works@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sepsol.works@gmail.com
            </a>
          </h5>
        </ConditionalWrapper>
      </section>

      

      <ConditionalWrapper
        condition={largeScreen}
        wrapper={children => (
          <Fade bottom fraction={0.05} distance="50px">
            {children}
          </Fade>
        )}
      >
        <section id="works">
          <SectionTitle>Works</SectionTitle>
          <Works />
        </section>
      </ConditionalWrapper>

      <ConditionalWrapper
        condition={largeScreen}
        wrapper={children => (
          <Fade bottom fraction={0.2} distance="50px">
            {children}
          </Fade>
        )}
      >
        <section id="skills">
          <SectionTitle>Skills</SectionTitle>
          <Skills />
        </section>
      </ConditionalWrapper>

      <ConditionalWrapper
        condition={largeScreen}
        wrapper={children => (
          <Fade bottom fraction={0.2} distance="50px">
            {children}
          </Fade>
        )}
      >
        <section id="about">
          <SectionTitle>About</SectionTitle>
          <p>
            Hello! I'm Sepehr, a full-stack software engineer and web developer
            based in San Francisco Bay Area, CA.
          </p>
          <p>
            I love tech and have been a tech-enthusiast since 7 years ago, and
            recently I decided to roll up my sleeves and be the builder of the
            things that have always interested me. During the past 4 years, I've
            founded and worked for different startups in various positions,
            which allowed me to meet many nice talented people and
            entrepreneurs.
          </p>
          <p>
            I have worked with a lot of popular software programs before
            becoming a developer and one of the most valuable skills I've
            learned from my past journey, is how to find high-quality resources
            and link myself to appropriate people to learn new skills. I
            recognize myself as a fast-learner, and you don't have to take my
            word for it! I was well-known at my university for my well-rounded
            research and presentation on various subjects. Plus, here's how my
            previous employer describes me in my recommendation letter:
          </p>
          <blockquote>
            We think that Sepehr has a high speed in learning programming
            concepts.
            <footer>Sina Maleki</footer>
          </blockquote>
          <p>
            As a software engineer, I enjoy using my skills to make innovative
            things that solve real-world problems and I love to bridge the gap
            between engineering and design.
          </p>
          <p>
            When I'm not working, I either watch YouTube for fun or to expand my
            knowledge, play with the UI/UX of other apps and try to come up with
            my twist on their concept, or sometimes play video games :)
          </p>
        </section>
      </ConditionalWrapper>

      {/* <WIP /> */}
    </main>
  );
}

export default Main;
