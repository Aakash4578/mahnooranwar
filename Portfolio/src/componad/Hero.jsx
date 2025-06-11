import React from 'react';

function Hero() {
  return (
    <>
      <header id="home" className="intro-section">
        <div className="container">
          <div className="row align-items-center">
            
            {/* 🟢 Text Content */}
            <div className="col-lg-6 col-md-12 text-center text-lg-start" data-aos="fade-right">
              <h1 className="banner-content">
                Hi, I'm <span className="banner-intro">Mahnoor Anwar</span> – A Full-Stack Developer
              </h1>
              <h3 className="hero-subtitle">Building Modern & Scalable Web Applications</h3>
              <p className="hero-description">
                Specializing in MERN Stack, ASP.NET Core MVC, and SQL Server to create dynamic, secure, and responsive websites.
              </p>
              
              <div className="action-buttons">
              <a href="/#contact">
                <button type="button" className="rounded-pill  allbtn">
                  <span>Hire me</span>
                  <span className="icon-wrapper"><i className="fas fa-arrow-right"></i></span>
                </button>
</a>
                <div className="social-icons">
                  <a href="https://github.com/mahnooranwar2002" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                  {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a> */}
                  {/* <a href="mailto:yourname@gmail.com" className="social-icon">
                    <i className="fas fa-envelope"></i>
                  </a> */}
                </div>
              </div>
            </div>

            {/* 🟢 Image Section */}
            <div className="col-lg-6 col-md-12 text-center" data-aos="fade-left">
              <div className="hero-image">
                <img src="assets/images/banner.webp" alt="Full-Stack Developer Banner" className="img-fluid" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
