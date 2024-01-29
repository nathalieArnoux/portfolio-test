import { Route, Routes } from 'react-router-dom';
// import logo from '../../assets/logo.svg';
import './App.scss';
import Header from '../Templates/Header/Header';
import Footer from '../Templates/Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      {/*         <img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/components/App/App.jsx</code> and save to reload.
</p>
<a
className="App-link"
href="https://react.dev/"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
