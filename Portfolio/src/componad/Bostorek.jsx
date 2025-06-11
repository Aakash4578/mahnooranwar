import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import "./Project.css";

function Bostorek() {
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
          <h2>BOSTOREK - Online Bookstore Management System</h2>
        </div>

        <div className="row justify-content-center">
          {/* Image Slider */}
          <div className="col-lg-5 col-md-6 col-12 mb-4">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <Slider {...settings}>
                  <div>
                    <img src="assets/images/b1.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b2.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b3.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b4.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b5.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b6.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b7.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b8.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b9.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b10.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/b12.png" alt="Project Image" className="img-fluid" />
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
                  <strong>BOSTOREK</strong> is a modern <strong>Online Bookstore Management System</strong> that allows users to browse, purchase, and manage books effortlessly.
                </p>

                <h2>Key Features</h2>
                <ul>
                  <li> Manage Users (Delete, Activate, Deactivate)</li>
                  <li> Add & Manage Authors, Books, and Categories</li>
                  <li> Secure Payment Gateway (Stripe/PayPal)</li>
                  <li> User Dashboard with Wishlist & Order Tracking</li>
                </ul>

                <h2>Technologies Used</h2>
                <ul>
                  <li><strong>Frontend:</strong> HTML, CSS, Bootstrap</li>
                  <li><strong>Backend:</strong> ASP.NET Core MVC</li>
                  <li><strong>Database:</strong> SQL Server</li>
                  <li><strong>Security:</strong> ASP.NET Identity</li>
                </ul>
                  {/* GitHub Link */}
                  <div className="project-github-link">
                  <a href="https://github.com/mahnooranwar2002/E_com" target="_blank" rel="noopener noreferrer">
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

export default Bostorek;
