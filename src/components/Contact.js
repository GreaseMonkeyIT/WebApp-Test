import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import contactImage from '../assets/images/contact.jpg';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
`;

const ContactContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

const Contact = () => (
  <Element name="contact">
    <Parallax bgImage={contactImage} strength={300}>
      <SectionWrapper>
        <ContactContent>
          <h1>Contact Us</h1>
          <p>Get in touch with us for any queries or consultation.</p>
          <p>Email: info@brilliantinteriors.com</p>
          <p>Phone: +1 234 567 890</p>
        </ContactContent>
      </SectionWrapper>
    </Parallax>
  </Element>
);

export default Contact;
