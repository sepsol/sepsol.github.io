import React, { useContext } from 'react';

import { SizeContext } from '../contexts/SizeContext';
import ConditionalWrapper from './ConditionalWrapper';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Fade from 'react-reveal/Fade';
import Data from '../database/works.json';

import './Works.css';

function Works() {
  const { moreThan720 } = useContext(SizeContext);

  return Data.map(work => (
    <div className="work-card-container">
      <ConditionalWrapper
        condition={moreThan720}
        wrapper={children => (
          <Fade bottom fraction={0.05} distance="70px">
            {children}
          </Fade>
        )}
      >
        <div className="work-card">
          <div className="work-side">
            <h4 className="work-title">{work.title}</h4>
            <p className="work-description">{work.description.short}</p>
            <ul className="work-techs">
              {work.techs.map(tech => (
                <li className="work-tag">{tech}</li>
              ))}
            </ul>
          </div>
          <LazyLoadImage
            className="work-hero"
            srcSet={`${work.img.hero.mobile} 480w, ${work.img.hero.desktop} 1280w`}
            src={work.img.hero.desktop}
            alt={work.img.hero.alt}
            threshold={600}
          />
        </div>
      </ConditionalWrapper>
    </div>
  ));
}

export default Works;
