import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import servicesImage from '../assets/images/services.jpg';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
`;

const ServicesContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

const Services = () => (
  <Element name="services">
    <Parallax bgImage={servicesImage} strength={300}>
      <SectionWrapper>
        <ServicesContent>
          <h1>Our Services</h1>
          <ul>
            <li>Interior Design</li>
            <li>Space Planning</li>
            <li>Consultation</li>
            <li>Project Management</li>
          </ul>
        </ServicesContent>
      </SectionWrapper>
    </Parallax>
  </Element>
);

export default Services;
