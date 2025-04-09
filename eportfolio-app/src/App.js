import './App.css';
import WipHeader from './components/WipHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Work from './components/Work';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <WipHeader />
      <AboutMe/>
      <Projects/>
      <Work/>
      <Footer/>
    </div>
    
  );
}

export default App;
