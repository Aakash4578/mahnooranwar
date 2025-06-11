import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Frooter from "./Frooter";
import './Project.css';

function Shopseas() {
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
        <div className="project-header text-center mb-4">
          <h2>Shopseas - Flight Management System</h2>
        </div>

        <div className="row justify-content-center">
          {/* Image Slider */}
          <div className="col-lg-5 col-md-6 col-12 mb-4">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <Slider {...settings}>
                  <div><img src="assets/images/flight/f2.png" alt="Shopseas 1" className="img-fluid" /></div>
                  <div><img src="assets/images/flight/f3.png" alt="Shopseas 1" className="img-fluid" /></div>
                  <div><img src="assets/images/flight/f4.png" alt="Shopseas 1" className="img-fluid" /></div>
                  <div><img src="assets/images/flight/f5.png" alt="Shopseas 1" className="img-fluid" /></div>
                  <div><img src="assets/images/flight/f6.png" alt="Shopseas 1" className="img-fluid" /></div>
                  <div><img src="assets/images/flight/f7.png" alt="Shopseas 1" className="img-fluid" /></div>
                  <div><img src="assets/images/flight/f8.png" alt="Shopseas 1" className="img-fluid" /></div>
                    <div><img src="assets/images/flight/pic12.png" alt="Shopseas 1" className="img-fluid" /></div>
                    <div><img src="assets/images/flight/f1.png" alt="Shopseas 1" className="img-fluid" /></div>
                   <div><img src="assets/images/flight/f9.png" alt="Shopseas 1" className="img-fluid" /></div>
                  <div><img src="assets/images/flight/f10.png" alt="Shopseas 1" className="img-fluid" /></div>  
                  <div><img src="assets/images/flight/f11.png" alt="Shopseas 1" className="img-fluid" /></div>
                     <div><img src="assets/images/flight/p10.png" alt="Shopseas 1" className="img-fluid" /></div>
                     <div><img src="assets/images/flight/pic13.png" alt="Shopseas 1" className="img-fluid" /></div>
                </Slider>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="col-lg-7 col-md-6 col-12">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h3>About the Project</h3>
                <p>
                  Shopseas is a comprehensive Flight Management System that simplifies and automates the operations 
                  of airlines. It enables users to book tickets, manage flights, and organize staff activities efficiently. 
                  The platform is designed to offer a seamless experience to both travelers and airline management.
                </p>

                <h3>Key Features</h3>
                <ul>
                  <li>Flight scheduling and real-time availability management</li>
                  <li>User-friendly ticket booking with seat selection</li>
                  <li>Admin dashboard for managing flights, bookings, and users</li>
                  <li>Staff management system with role-based access</li>
                </ul>

                <h3>Technologies Used</h3>
                <ul>
                  <li><strong>Frontend:</strong> HTML, CSS, Bootstrap</li>
                  <li><strong>Backend:</strong> ASP.NET Core MVC</li>
                  <li><strong>Database:</strong> SQL Server</li>
                  <li><strong>Security:</strong> ASP.NET Identity</li>
                </ul>
                 {/* GitHub Link */}
                 <div className="project-github-link">
                  <a href="https://github.com/mahnooranwar2002/Airlines_web" target="_blank" rel="noopener noreferrer">
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

export default Shopseas;
