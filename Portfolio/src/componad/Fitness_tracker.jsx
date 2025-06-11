import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Frooter from "./Frooter";
import "./Project.css";
const Fitness_tracker = () => {
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
          <h2>Royale Fitness - Fitness Tracker</h2>
        </div>

        <div className="row justify-content-center">
          {/* Image Slider */}
          <div className="col-lg-5 col-md-6 col-12 mb-4">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <Slider {...settings}>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic1.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic2.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic3.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic4.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic5.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic7.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic8.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic10.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic11.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic12.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/fitness Tracker/pic13.png"
                      alt="Shopseas 1"
                      className="img-fluid"
                    />
                  </div>
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
                  This project aims to provide a comprehensive fitness tracking
                  solution that is user-friendly, secure, and scalable, catering
                  to the needs of users seeking to manage their fitness and
                  nutrition effectively.
                </p>

                <h3>Key Features</h3>
                <ul>
                  <li>
                    Creation, editing, and deletion of workout routines with
                    detailed logging.
                  </li>
                  <li>
                    Nutrition tracking for daily food intake, meal types, and
                    nutritional values.
                  </li>
                  <li>
                    Progress tracking through body measurements, weight logging,
                    and performance metrics.
                  </li>
                  <li>Admin can add and modify the details of blog faq(frequently asked question) and change the status of the user</li>
                </ul>

                <h3>Technologies Used</h3>
                <ul>
                  <li>
                    <strong>Frontend:</strong> HTML, CSS, Bootstrap, React
                  </li>
                  <li>
                    <strong>Backend:</strong> Express js
                  </li>
                  <li>
                    <strong>Database:</strong> Mongodb 
                  </li>
                  {/* <li>
                    <strong>Security:</strong> ASP.NET Identity
                  </li> */}
                </ul>
                {/* GitHub Link */}
                <div className="project-github-link">
                  <a
                    href="https://github.com/mahnooranwar2002/fitnesstracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
};

export default Fitness_tracker;
