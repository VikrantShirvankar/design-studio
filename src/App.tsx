import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import About from './Containers/About/About';
import Home from './Containers/Home/Home';
import Contact from './Containers/Contact/Contact';
import Portfolio from './Containers/Portfolio/Portfolio';
import Navigation from './Components/Navigatiion/Navigation';
import NoMatchFound from './Containers/NoMatchFound/NoMatchFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="design-studio-app">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatchFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
