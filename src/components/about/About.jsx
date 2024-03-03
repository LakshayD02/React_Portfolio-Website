import React from 'react'
import './about.css'
import ME from '../../assets/About-Img.png'
import Projects from '../../assets/Academic Projects.pdf'
import Internships from '../../assets/Internships (Lakshay).pdf'
import { PiAlienBold } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { Tilt } from 'react-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import experience from '../experience/Experience'
// ..
AOS.init();


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

          <Tilt>
              <article className="about_card">
                <PiAlienBold className='about_icon' />
                <h5>Internships</h5>
                <small>100+ Completed</small>
              </article>
            </Tilt>

            <Tilt>
              <article className="about_card">
                <PiAlienBold className='about_icon' />
                <h5>Experience</h5>
                <small>25+ Months</small>
              </article>
            </Tilt>

            <Tilt>
              <article className="about_card">
                <GoProjectRoadmap className='about_icon' />
                <h5>Projects</h5>
                <small>60+ Projects</small>
              </article>
            </Tilt>

          </div>
          <p className='text-light' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000">
Leveraging over 2 years of diverse internship experience, I have cultivated a comprehensive and versatile skillset across various IT domains. My expertise encompasses web development, software development, and search engine optimization (SEO). I possess proficiency in programming languages such as Python and JavaScript, and have experience with databases, cloud platforms, and deploying projects on various architectures. This experience has instilled in me a strong foundation in software engineering principles, while concurrently fostering my analytical and problem-solving abilities. This skillset allows me to effectively tackle complex technical challenges and deliver innovative solutions.</p>

          <a href={Internships} download className='btn btn-primary'>Professional Experience</a>
          <a href={Projects} download className='btn btn-primary'>Academic Projects</a>
        </div>
      </div>
    </section>
  )
}

export default about