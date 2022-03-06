import logo from './logo.svg';
import './App.css';
import Home from './pages/homapage'
import AboutPage from './pages/about'
import TopNavigation from './components/navigation/Navigation'
import Footer from './components/footer/footer'
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom'
import Services from './pages/services'
import Contact from './pages/contact'

function App() {
  return (

    <div className="App">
    <TopNavigation/>

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path ="/contact" element ={<Contact />} />
      
      </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
