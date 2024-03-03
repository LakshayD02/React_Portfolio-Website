import React from 'react'
import './testimonials.css'
import AVATAR from '../../assets/linkedin.png'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Working with Lakshay was like injecting a burst of energy into our project! His enthusiasm is infectious, turning what could have been mundane tasks into exciting milestones. The passion he brought to the table is a game changer. Our collaboration felt like a creative adventure, not just a project."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Creativity knows no bounds with Lakshay. He took our ideas and transformed them into a digital masterpiece. Each design and line of code reflects a level of creativity that's not just visually stunning but also strategically brilliant. Lakshay doesn't just follow trends; he sets them."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Witnessing the never-ending nature of improvement with Lakshay is like attending a symphony of progress. His dedication to refining and enhancing our web presence was awe-inspiring. It's not just about delivering a project; it's about making it better with each iteration. His commitment to improvement is truly commendable."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
          "Working alongside Lakshay has been a transformative experience. His relentless pursuit of excellence and commitment to pushing boundaries have significantly elevated our online presence. With each iteration, Lakshay demonstrates an unparalleled dedication to improvement, ensuring that our portfolio website remains at the forefront of innovation in our industry."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Lakshay's approach to website development is nothing short of exemplary. His dedication to perfection and continuous enhancement of our digital platform have left an indelible mark on our organization. With Lakshay at the helm, we've witnessed a seamless fusion of creativity and technical prowess, resulting in a website that not only meets but exceeds expectations."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Working with Lakshay was a journey of continuous elevation. His approach to web development, UI/UX, and social media management is nothing short of extraordinary. What sets him apart is their relentless pursuit of improvement, it's like having a partner who never settles, always pushing boundaries to exceed expectations."
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials