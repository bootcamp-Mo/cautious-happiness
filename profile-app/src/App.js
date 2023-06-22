import './App.css';

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// import About from './components/About'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
// import Resume from './components/Resume'



function App() {
  return (
    <div className="App">
      <Header />
      <main id='page'>
        <section class="hero is-primary">
          <main>
            {/* <About />
            <Portfolio />
            <Contact />
            <Resume /> */}
          </main>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
