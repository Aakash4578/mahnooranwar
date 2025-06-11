import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "Flexor - Lawyer Appointment System",
    description: "A system that allows users to book lawyers, manage appointments, and handle admin tasks easily.",
    images: ["assets/images/f1.webp", "assets/images/f14.png", "assets/images/f2.png"],
    link: "/Flexor",
  },
  {
    id: 2,
    title: "Shopseas - Flight Booking Platform",
    description: "A platform to manage flights, handle staff, book tickets, and ensure a smooth travel experience.",
    images: ["assets/images/f3.webp", "assets/images/f5.webp", "assets/images/f6.webp"],
    link: "/Shopseas",
  },
  {
    id: 3,
    title: "BOSTOREK - Online Bookstore System",
    description: "An online book-selling platform with secure payments, order tracking, and admin management tools.",
    images: ["assets/images/b1.png", "assets/images/b7.png", "assets/images/b9.png"],
    link: "/Bostorek",
  },
  {
    id: 4,
    title: "Nexus - Communication ",
    description: "A record and order handling system for admins, users, and employees with full control features.",
    images: ["assets/images/nexus/n1.png", "assets/images/nexus/n2.png", "assets/images/nexus/n3.png"],
    link: "/Nuxes",
  },
  {
    id: 5,
    title: "Royale - Fitness Tracker System",
    description: "Tracks user fitness, nutrition, and workouts with an easy-to-use and scalable interface for all.",
    images: ["assets/images/fitness Tracker/pic1.png", "assets/images/fitness Tracker/pic2.png", "assets/images/fitness Tracker/pic3.png"],
    link: "/fitnessTracker",
  },
  {
    id: 6,
    title: "Logistica - Courier Management",
    description: "Provides real-time courier tracking, delivery optimization, and efficient logistic workflows.",
    images: ["assets/images/Cms/cms1.png", "assets/images/Cms/cms2.png", "assets/images/Cms/cms1.png"],
    link: "/cms",
  },
];


function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="text-center s-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>A collection of my work and projects</p>
        </div>
        <div className="row portrow">
          {/*  slide project cards */}
          <Swiper
            modules={[ Autoplay]}
            spaceBetween={20} 
            slidesPerView={3} 
            navigation={false} 
            pagination={{ clickable: true }} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              1200: {
                slidesPerView: 3, 
              },
              768: {
                slidesPerView: 2, 
              },
              480: {
                slidesPerView: 1, 
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-card" data-aos="fade-up">
                  {/* Image slider project */}
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={false}
                    pagination={false}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                  >
                    {project.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img src={img} alt={`Project ${project.id} - Slide ${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Project card content */}
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description p-3">{project.description}</p>
                    <div className="project-links">
                      <Link to={project.link} className="btn">View Details</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
