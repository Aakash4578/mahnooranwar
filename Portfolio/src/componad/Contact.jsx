import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Index() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <section className="py-5" id="contact">
        <div className="container contacts">
          <div className="text-center s-title mb-4" data-aos="fade-up">
            <h2>Let’s Connect</h2>
            <p>We're committed to providing exceptional support for your needs.</p>
          </div>
          <div className="row">
            {/* Contact Info */}
            <div className="col-lg-5 mb-4" data-aos="fade-right">
              <div className="info-wrap">
                {/* <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone flex-shrink-0 me-3"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+656+5+6++</p>
                  </div>
                </div> */}
                <div className="info-item d-flex mb-3">
                  {/* <i className="bi bi-envelope flex-shrink-0 me-3"></i> */}
                  <div>
                    {/* <h3>Email Us</h3>
                    <p>mahnnooranwar191@gmail.com</p> */}
                  </div>
                </div>
                <div className="social-icons d-flex mt-4">
                  <a href="https://www.linkedin.com/in/mahnoor-anwar-a199a2363/"  target="_blank"><i className="bi bi-linkedin" ></i></a>
                  <a href="https://github.com/mahnooranwar2002"  target="_blank"><i className="fab fa-github"></i></a>
<a href="mailto:mahnnooranwar191@gmail.com">
  <i className="fas fa-envelope"></i>
</a>
                </div>
                <div className="imgd">
                  <img src="assets/images/contact.webp" alt="Contact" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7" data-aos="fade-left">
              <form id="contactForm" action="https://formspree.io/f/mnnqqpgk" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="rounded-pill aboutbtn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
