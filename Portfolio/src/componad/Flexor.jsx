import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Frooter from "./Frooter";
import './Project.css';

function Flexor() {
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
          <h2>Flexor - Lawyer Appointment Management System</h2>
        </div>

        <div className="row justify-content-center">
          {/* Image Slider */}
          <div className="col-lg-5 col-md-6 col-12 mb-4">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <Slider {...settings}>
                  <div><img src="assets/images/f1.webp" alt="Flexor 1" className="img-fluid" /></div>
                   <div><img src="assets/images/f14.png" alt="Flexor 2" className="img-fluid" /></div>
                  <div><img src="assets/images/f2.png" alt="Flexor 3" className="img-fluid" /></div>
                        <div><img src="assets/images/f3.png" alt="Flexor 2" className="img-fluid" /></div>
                              
                          <div><img src="assets/images/f5.png" alt="Flexor 2" className="img-fluid" /></div>
                                 <div><img src="assets/images/f6.png" alt="Flexor 2" className="img-fluid" /></div>
                  <div><img src="assets/images/f7.webp" alt="Flexor 2" className="img-fluid" /></div>
                  <div><img src="assets/images/f15.png" alt="Flexor 2" className="img-fluid" /></div>
                  
                      <div><img src="assets/images/f16.png" alt="Flexor 3" className="img-fluid" /></div>
                    <div><img src="assets/images/f17.png" alt="Flexor 3" className="img-fluid" /></div>
                       <div><img src="assets/images/f18.png" alt="Flexor 3" className="img-fluid" /></div>
                         <div><img src="assets/images/f19.png" alt="Flexor 3" className="img-fluid" /></div>
                         <div><img src="assets/images/f20.png" alt="Flexor 3" className="img-fluid" /></div>
                         <div><img src="assets/images/f21.png" alt="Flexor 3" className="img-fluid" /></div>
                         
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
                  Flexor streamlines the entire process of lawyer appointment management. 
                  Clients can easily book appointments online, lawyers can view and manage their schedules, 
                  and admins can monitor the overall system activity.
                </p>

                <h3>Key Features</h3>
                <ul>
                  <li>Client-side appointment booking with available time slots</li>
                  <li>Lawyer dashboard to manage bookings and availability</li>
                  <li>Admin panel for user management and analytics</li>
                  <li>Email notifications for confirmations and reminders</li>
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
                  <a href="https://github.com/mahnooranwar2002/lawyer_website" target="_blank" rel="noopener noreferrer">
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

export default Flexor;
