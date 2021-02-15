import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';

import ConditionalWrapper from '../Helpers/ConditionalWrapper';
import SectionTitle from './SectionTitle';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import Skills from './Skills';
import Works from './Works';

import BackgroundIntersect from '../../assets/svg/BackgroundIntersect';

import './Main.scss';

function Main() {
  const largeScreen = useMediaQuery('(min-width: 800px)');

  return (
    <main>
      <section id="home">
        <BackgroundIntersect className="background-intersect" />
        <div className="foreground">
          
          <div className="intro-text">
            <h1>
              <div className="line-1">I design &amp; code</div>
              <div className="line-2">for web &amp; mobile</div>
            </h1>
            <p>
              Hi, I’m Sepehr and I help businesses create applications and websites to increase
              brand awareness and sales. If that seems interesting to you, shoot me an email!
            </p>
          </div>
        </div>
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
    </main>
  );
}

export default Main;
