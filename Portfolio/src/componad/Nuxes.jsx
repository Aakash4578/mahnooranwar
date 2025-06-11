import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import './Project.css'
import Frooter from "./Frooter";

function Nuxes() {
  // Slider settings
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <Navbar />
      <div className="container project-container">
        <div className="project-header">
          <h2>Nexus Communication System Automation</h2>
        </div>

        <div className="row justify-content-center">
          {/* Image Slider */}
          <div className="col-lg-5 col-md-6 col-12 mb-4">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <Slider {...settings}>
                  <div>
                    <img src="assets/images/nexus/n1.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/nexus/n2.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/nexus/n3.png" alt="Project Image" className="img-fluid" />
                  </div>
                    <div>
                    <img src="assets/images/nexus/n4.png" alt="Project Image" className="img-fluid" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="col-lg-7 col-md-6 col-12">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h2>About the Project</h2>
                <p>
                  <strong>Nexus</strong> is a web-based communication management system that streamlines operations between administrators, users, employees, and retail stores. It allows efficient handling of customer orders, billing, product plans, feedback, and records — all in one unified platform.
                </p>

                <h2>Key Features</h2>
                <ul>
                  <li>Admin Panel with dashboard, DataTables, and record management</li>
                  <li>User module for plan subscriptions and order placement</li>
                  <li>Retail store and employee CRUD operations</li>
                  <li>Feedback and search functionality with modern UI</li>
                </ul>

                <h2>Technologies Used</h2>
                <ul>
                  <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap</li>
                  <li><strong>Backend:</strong> ASP.NET Core MVC</li>
                  <li><strong>Database:</strong> SQL Server</li>
                  <li><strong>Security:</strong> Entity Framework Core with data validation</li>
                </ul>

                {/* GitHub Link */}
                <div className="project-github-link">
                  <a href="https://github.com/mahnooranwar2002/nexus-Web" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nuxes;
