
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import './Project.css'
import Frooter from "./Frooter";
const Cms = () => {
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
          <h2>Logistica  Courier Management System</h2>
        </div>

        <div className="row justify-content-center">
          {/* Image Slider */}
          <div className="col-lg-5 col-md-6 col-12 mb-4">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <Slider {...settings}>
                  <div>
                    <img src="assets/images/Cms/cms1.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/Cms/cms2.png" alt="Project Image" className="img-fluid" />
                  </div>
                  <div>
                    <img src="assets/images/Cms/cms3.png" alt="Project Image" className="img-fluid" />
                  </div>
                    <div>
                    <img src="assets/images/Cms/cms5.png" alt="Project Image" className="img-fluid" />
                  </div>
                          <div>
                    <img src="assets/images/Cms/cms6.png" alt="Project Image" className="img-fluid" />
                  </div>
                          <div>
                    <img src="assets/images/Cms/cms7.png" alt="Project Image" className="img-fluid" />
                  </div>
                          <div>
                    <img src="assets/images/Cms/cms8.png" alt="Project Image" className="img-fluid" />
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
                 The <strong>Courier Management</strong>   System provides a robust and secure platform for efficiently managing courier operations. Designed for scalability, it helps logistics providers optimize delivery workflows and monitor shipments in real-time. 
                </p>

                <h2>Key Features</h2>
                <ul>
                  <li>Admin can add and manage couriers, courier types, agents, companies, and FAQs</li>
                  <li>User module for add the coureiers and track the status</li>
               
                  <li>Feedback and search functionality with modern UI</li>
                </ul>

                <h2>Technologies Used</h2>
                <ul>
                  <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap,react</li>
                  <li><strong>Backend:</strong> Express js</li>
                  <li><strong>Database:</strong> Mongo Db</li>
                  
                </ul>

                {/* GitHub Link */}
                <div className="project-github-link">
                  <a href="https://github.com/mahnooranwar2002/CourierManagementSystem-" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cms
