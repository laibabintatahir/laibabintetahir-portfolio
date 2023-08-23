import React from "react";
import { Data } from "./Data";
import "./Testominal.css";

import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

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
        modules={{ Pagination }}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <div className="testimonail__card" key={id}>
              <img src={image} alt="" className="testominal__img" />

              <h3 className="testominal__name">{title}</h3>

              <p className="testominal__description">{description}</p>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testominal;
