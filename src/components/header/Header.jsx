import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_des">
          <h2>Welcome to my digital portfolio! I'm</h2>
          <h1 className='te-blur' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000">Lakshay Dhoundiyal</h1>
          <h5 className="text-light head_des" >
            
With a fervent enthusiasm for web development and a keen interest in cybersecurity, I am dedicated to crafting secure and user-centric digital experiences. My expertise lies in the creation of dynamic web applications, the implementation of robust security protocols, and the ongoing pursuit of knowledge regarding the ever-changing panorama of cyber threats.</h5>
          <CTA />
        </div>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#about" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header