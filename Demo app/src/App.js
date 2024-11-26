// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './Services/usecontext'; // Import the provider
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import AddCart from './Components/AddCart';


function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} /> {/* Correct path for 'About Us' */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cart" element={<AddCart />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
