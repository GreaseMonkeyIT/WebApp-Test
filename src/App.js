import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Buffer from './components/Buffer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Buffer />
      <Products />
      <Buffer />
      <About />
      <Buffer />
      <Services />
      <Buffer />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
