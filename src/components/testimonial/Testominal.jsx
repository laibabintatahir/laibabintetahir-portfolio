import React from "react";
import { Data } from "./Data";
import "./Testominal.css";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/swiper-bundle.min.css"; 

SwiperCore.use([]); 

const Testominal = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My clients say</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide key={id} className="testimonail__card">
            <img src={image} alt="" className="testominal__img" />
            <h3 className="testominal__name">{title}</h3>
            <p className="testominal__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testominal;
