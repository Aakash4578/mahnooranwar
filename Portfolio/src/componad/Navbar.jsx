import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
// 🔁 Function to Scroll to Top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  // 🟢 Smooth Scrolling to Sections
  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); 
      }
    }
  }, [location]);

  // 🟢 Toggle Navbar for Mobile
  const toggleNavbar = () => setIsOpen(!isOpen);

  // 🟢 Close Navbar on Link Click
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top" style={{ zIndex: 1050 }}>
      <div className="container">
        
        {/* 🟢 Brand Logo */}
       {/* 🔹 Brand Logo Click – Scroll to Top */}
<Link className="navbar-brand" to="/" onClick={scrollToTop} aria-label="Home">
  <h1>
    <strong style={{ fontFamily: "Pacifico", fontWeight: 400, fontStyle: "normal" }}>
      Mahnoor Anwar
    </strong>
  </h1>
</Link>




        {/* 🟢 Navbar Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🟢 Navbar Links */}
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
           {/* 🔹 Home Nav Link – Scroll to Top */}
<li className="nav-item">
  <Link className="nav-link active" to="/" onClick={() => { closeNavbar(); scrollToTop(); }}>
    Home
  </Link>
</li>
            <li className="nav-item">
              <a className="nav-link" href="/#about" onClick={closeNavbar}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#services" onClick={closeNavbar}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#portfolio" onClick={closeNavbar}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact" onClick={closeNavbar}>Contact</a>
            </li>
          </ul>

          {/* 🟢 Contact Button */}
          <a href="/#contact">
            <button type="button" className="rounded-pill allbtn">
              <span>Let’s Connect</span>
              <span className="icon-wrapper"><i className="fa-solid fa-phone"></i></span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
