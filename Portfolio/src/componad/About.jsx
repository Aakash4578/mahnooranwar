import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container py-3">
        <div className="row">
          {/* 🟢 Image Section */}
          <div className="col-lg-6 col-md-12 text-center py-3" data-aos="fade-right">
            <div className="imgsec">
              <img src="assets/images/about.webp" alt="A professional full-stack developer working on a project" className="img-fluid"/>
            </div>
          </div>

          {/* 🟢 Content Section */}
          <div className="col-lg-6 col-md-12">
            <div className="aboutcontent" data-aos="fade-left">
              <h3>About Me</h3>
              <h1><strong>Full-Stack Developer & Problem Solver</strong></h1>
              <p>
                I’m <strong>Mahnoor Anwar</strong>, a dedicated <strong>MERN Stack, ASP.NET Core MVC, and SQL Server</strong> developer 
                passionate about creating high-performance, scalable, and visually engaging web applications.
              </p>
              <p>
                With a strong background in both front-end and back-end development, I specialize in crafting seamless 
                digital experiences that enhance business efficiency.
              </p>
              
              {/* 🟢 List of Skills */}
              <ul className="list-unstyled">
                <li>✔ <strong>Custom Web Apps</strong> – Interactive UI with a strong backend.</li>
                <li>✔ <strong>Optimized Performance</strong> – Fast, secure, and scalable solutions.</li>
                <li>✔ <strong>Modern Tech Stack</strong> – Leveraging the latest technologies.</li>
                <li>✔ <strong>SEO & Responsive</strong> – Ensuring a smooth user experience across all devices.</li>
                <li>✔ <strong>End-to-End Development</strong> – From idea to deployment with best industry practices.</li>
              </ul>

              {/* 🟢 Contact Button */}
              <div className="text-center text-md-start">
                <a href="#contact">
                  <button type="button" className="rounded-pill aboutbtn">
                    <span>Contact now</span>
                    <span className="icon-wrapper"><i className="fa-solid fa-phone"></i></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
