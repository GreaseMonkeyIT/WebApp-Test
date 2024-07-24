import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import aboutImage from '../assets/images/about.avif';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
`;

const AboutContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

const About = () => (
  <Element name="about">
    <Parallax bgImage={aboutImage} strength={300}>
      <SectionWrapper>
        <AboutContent>
          <h1>About Us</h1>
          <p>At Brilliant Interiors, we pride ourselves on delivering exceptional design services to transform your spaces.</p>
        </AboutContent>
      </SectionWrapper>
    </Parallax>
  </Element>
);

export default About;
