import './App.css';

import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme, Container, VStack, HStack, Link, Box } from '@chakra-ui/react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume'
import BgWorm from './assets/wormhole.png'



const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Averia Serif Libre',
        color: '#dc9d7e',
        bg: '#efe0bf'
      }
    },
  }
});


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box
          bgImage={BgWorm}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover">
          <VStack
            minH="100vh"
            spacing={4}>
            <Header />
            <Container
              boxShadow='2xl'
              p='6'
              rounded='3xl'
              bg='tomato'
              maxW='container.md'
            >
              <Routes >
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/" element={<About />} />
              </Routes>
            </Container>
            <Footer />
          </VStack>
        </Box>
      </Router>
    </ChakraProvider >
  );
}

export default App;


