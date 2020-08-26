import React, { useContext } from 'react';

import { ScreenSizeContext } from '../contexts/ScreenSizeContext';
import ConditionalWrapper from './ConditionalWrapper';

import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Picture } from 'react-responsive-picture';

import Fade from 'react-reveal/Fade';
import Data from '../database/works.json';

import './Works.css';

function Works() {
  const { moreThan720 } = useContext(ScreenSizeContext);

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

          <LazyLoadComponent visibleByDefault>
            <Picture
              className="work-hero"
              alt={work.img.hero.alt}
              sources={[
                {
                  srcSet: work.img.hero.mobile.webp,
                  media: '(max-width: 480px)',
                  type: 'image/webp'
                },
                {
                  srcSet: work.img.hero.mobile.png,
                  media: '(max-width: 480px)',
                  type: 'image/png'
                },
                {
                  srcSet: work.img.hero.desktop.webp,
                  type: 'image/webp'
                },
                {
                  srcSet: work.img.hero.desktop.png,
                  type: 'image/png'
                }
              ]}
            />
          </LazyLoadComponent>
        </div>
      </ConditionalWrapper>
    </div>
  ));
}

export default Works;
