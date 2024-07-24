import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import backgroundImage from '../assets/images/background.jpg';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
`;

const HomeContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

const Home = () => (
  <Element name="home">
    <Parallax bgImage={backgroundImage} strength={300}>
      <SectionWrapper>
        <HomeContent>
          <h1>Welcome to Brilliant Interiors</h1>
          <p>Transforming spaces with elegance and style.</p>
        </HomeContent>
      </SectionWrapper>
    </Parallax>
  </Element>
);

export default Home;
