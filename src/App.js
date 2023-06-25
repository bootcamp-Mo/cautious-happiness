import './App.css';

import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme, VStack } from '@chakra-ui/react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import About from './components/About'
import Portfolio from './components/Portfolio/Portfolio'
import Navigation from './components/Navigation';
// import Resume from './components/Resume'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Averia Serif Libre',
        color: '#9eab78',
        bg: '#f8f4ec'
      },
    },
  },
});


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <VStack >
            <Navigation />
          </VStack>

          <Routes >
            {/* <Route path="/about" element={About} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/resume" element={Resume} />
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