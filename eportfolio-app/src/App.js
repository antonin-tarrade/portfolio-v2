import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WipHeader from './components/WipHeader.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Work from './components/Work.jsx';
import Footer from './components/Footer.jsx';
import ProjectPage from './components/ProjectPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
