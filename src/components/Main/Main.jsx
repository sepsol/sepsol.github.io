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
