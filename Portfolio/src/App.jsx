import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componad/Navbar';
import Footer from './componad/Frooter';
import Index from './componad/Index';
import Shopseas from './componad/Shopseas';
import Flexor from './componad/Flexor';
import Bostorek from './componad/Bostorek';
import Nuxes from './componad/Nuxes';
import ScrollToTopButton from './componad/ScrollToTopButton';
import ScrollToTop from "./componad/ScrollToTop"; // ✅ Import

import './App.css';
import Fitness_tracker from './componad/Fitness_tracker';
import Cms from './componad/Cms';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop /> {/* ✅ Add this here */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shopseas" element={<Shopseas />} />
        <Route path="/flexor" element={<Flexor />} />
        <Route path="/bostorek" element={<Bostorek />} />
        <Route path="/Nuxes" element={<Nuxes />} />
          <Route path="/fitnessTracker" element={<Fitness_tracker/>} />
            <Route path="/cms" element={<Cms/>} />
      </Routes>
      <Footer />
      <ScrollToTopButton /> {/* ✅ Back to Top Button */}
    </Router>
  );
}

export default App;
