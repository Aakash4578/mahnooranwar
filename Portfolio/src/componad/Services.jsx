import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="text-center s-title mb-4" data-aos="fade-up">
          <h2>Services</h2>
          <p>Providing top-notch solutions for your business needs</p>
        </div>

        <div data-aos="fade-up">
          <Slider {...settings}>
            {/*  1  */}
            <div className="p-3">
              <div className="service-card text-center">
                <div className="icon">
                  <i className="fa-solid fa-laptop-code fa-2x"></i>
                </div>
                <h3>Full-Stack Web Development</h3>
                <p>High-performance, scalable, and visually appealing websites.</p>
              </div>
            </div>

            {/* 2 */}
            <div className="p-3">
              <div className="service-card text-center">
                <div className="icon">
                  <i className="fa-solid fa-cogs fa-2x"></i>
                </div>
                <h3>E-Commerce Solutions</h3>
                <p>Secure payment gateways and dynamic online stores.</p>
              </div>
            </div>

            {/* 3*/}
            <div className="p-3">
              <div className="service-card text-center">
                <div className="icon">
                  <i className="fa-solid fa-shopping-cart fa-2x"></i>
                </div>
                <h3>Custom Web Applications</h3>
                <p>Optimizing workflows with tailored web applications.</p>
              </div>
            </div>

            {/* 4*/}
            <div className="p-3">
              <div className="service-card text-center">
                <div className="icon">
                  <i className="fa-solid fa-database fa-2x"></i>
                </div>
                <h3>MERN Stack Development</h3>
                <p>Building scalable and efficient applications using MongoDB, Express, React, and Node.js.</p>
              </div>
            </div>

           
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Services;
