import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Frooter() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <footer className="footer">
      <div className="container text-center">
        {/* <p>
          &copy; 2024 Aakash_waghella. All rights reserved.
        </p> */}
        <div className="footer-links">
          <a href="/#home">Home</a> | 
          <a href="/#about">About</a> | 
          <a href="/#services">Services</a> | 
          <a href="/#portfolio">Portfolio</a> | 
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Frooter;
