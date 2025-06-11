import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BrandSlider() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear", 
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      <div><img src="/assets/images/1.webp" alt="Image 1" /></div>
      <div><img src="/assets/images/2.webp" alt="Image 2" /></div>
      <div><img src="/assets/images/3.webp" alt="Image 3" /></div>
      <div><img src="/assets/images/1.webp" alt="Image 4" /></div>
      <div><img src="/assets/images/2.webp" alt="Image 5" /></div>
      <div><img src="/assets/images/expresslogo.png" alt="Image 5" /></div>
      <div><img src="/assets/images/express.png" alt="Image 5" /></div>
      <div><img src="/assets/images/react.png" alt="Image 5" /></div>
    </Slider>
  );
}

export default BrandSlider;
