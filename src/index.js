import React from 'react';
import ReactDOM from 'react-dom';
import About from './component/About';
import Contact from './component/Contact';
import Examinations from './component/Examinations';
import Footer from './component/Footer';
import Header from './component/Header';
import Services from './component/Services';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <About />
    <Examinations />
    <Services />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

