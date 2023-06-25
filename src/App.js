import './App.css';

import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header'
import Footer from './components/Footer'
// import About from './components/About'
import Portfolio from './components/Portfolio/Portfolio'
// import Contact from './components/Contact'
// import Resume from './components/Resume'



function App() {
  return (
    <ChakraProvider>
      <Router>
        <div >
          <Header />
          <Routes>
            {/* <Route path="/about" element={About} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/contact" element={Contact} />
            <Route path="/resume" element={Resume} />
            <Route path="/" element={<About />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ChakraProvider >
  );
}

export default App;



/**==============================================
 * ?                  Info
 *   
 *   
 **   exact
 *      is used to make the routes strictly match the location's pathname. 
 * This ensures that the route will only be rendered if the path is an exact 
 *  match.
 *
 *=============================================**/