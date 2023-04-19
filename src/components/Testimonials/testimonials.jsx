import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "JONHJ",
    review:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,sed accusantium sapiente, perferendis aliquam numquam vitae voluptas aperiam illo quis provident similique minus dolorem esse, dolor nemo? Consectetur, mollitia facere.",
  },
  {
    avatar: AVTR2,
    name: "JONHJ",
    review:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,sed accusantium sapiente, perferendis aliquam numquam vitae voluptas aperiam illo quis provident similique minus dolorem esse, dolor nemo? Consectetur, mollitia facere.",
  },
  {
    avatar: AVTR3,
    name: "JONHJ",
    review:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,sed accusantium sapiente, perferendis aliquam numquam vitae voluptas aperiam illo quis provident similique minus dolorem esse, dolor nemo? Consectetur, mollitia facere.",
  },
  {
    avatar: AVTR4,
    name: "JONHJ",
    review:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,sed accusantium sapiente, perferendis aliquam numquam vitae voluptas aperiam illo quis provident similique minus dolorem esse, dolor nemo? Consectetur, mollitia facere.",
  },
];
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="testimonial"
            >
              <div className="client_avatar">
                <img
                  src={avatar}
                  alt="name"
                />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
