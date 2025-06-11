import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Brand from './Brand'
import Frooter from './Frooter'
import { Link } from "react-router-dom";
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Hero from './Hero';
function Index() {
  return (
    <>
   <Hero></Hero>
<Brand></Brand>    
<About></About>
<Services></Services>
<Portfolio></Portfolio>
<Contact></Contact>
    </>
  )
}

export default Index



