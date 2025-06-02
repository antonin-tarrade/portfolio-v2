import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WipHeader from './components/WipHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Work from './components/Work';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <WipHeader />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutMe />
                <Projects />
                <Work />
                <Footer />
              </>
            }
          />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
