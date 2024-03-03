import React from 'react'
import './contact.css'
import { IoIosMailUnread } from "react-icons/io";
import { FaSearchLocation, FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Tilt } from 'react-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to submit the form?");
    
    // If user confirms, proceed with form submission
    if (isConfirmed) {
      emailjs.sendForm('service_u0xmbpa', 'template_nkc2tda', form.current, 'dC7BeYth6WloRYvXe')
        .then((result) => {
            console.log(result.text);
            // Show success message to user
            window.alert("Your message has been sent successfully!");
        })
        .catch((error) => {
            console.log(error.text);
            // Show error message to user
            window.alert("Oops! Something went wrong. Please try again later.");
        });
  
      // Reset the form
      e.target.reset();
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>
        Contact Me
      </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <Tilt>
          <article className="contact_option">
            <IoIosMailUnread  className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>lakshay22dhoundiyal@gmail.com</h5>
            <a href="mailto:lakshay22dhoundiyal@gmail.com" target='_blank'>Send Message</a>
          </article>
          </Tilt>
          <Tilt>
          <article className="contact_option">
            <FaWhatsapp  className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Lakshay Dhoundiyal</h5>
            <a href="https://api.whatsapp.com/send?phone=9560547779" target='_blank'>Send Message</a>
          </article>
          </Tilt>
          <Tilt>

          <article className="contact_option">
            <FaSearchLocation className='contact_option-icon' />
            <h4>Location</h4>
            <h5>New Delhi, India</h5>
            <a href="https://www.google.com/maps/place/South+Delhi,+New+Delhi,+Delhi/@28.486955,77.181708,12z/data=!3m1!4b1!4m6!3m5!1s0x390ce1bd6be37ea9:0x9800d4b5d8530f44!8m2!3d28.470931!4d77.1830243!16s%2Fm%2F027drpk?entry=ttu" target='_blank'>Check Location</a>
          </article>
          </Tilt>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Enter Your Name' required data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000"/>
          <input type="number" name='contact' placeholder='Enter Your Contact' required data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000"/>
          <input type="email" name='email' placeholder='Enter Your Email' required data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000"/>
          <textarea name="message" rows="16" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact