import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const services = () => {
  return (
    <section id="services">
      <h5>What I Have To Offer</h5>
      <h2>My Services</h2>

      <div className="container services_container" data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="1000">
          <article className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
            <ul className="service_list">
              <li>
                <FaCheck className='service_list-icon' />
                <p>Custom Website Development</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Content Management Systems</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>E-commerce web Solutions</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Website host Security system</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Web performance Optimization</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service_head">
              <h3>Cyber Security</h3>
            </div>
            <ul className="service_list">
              <li>
                <FaCheck className='service_list-icon' />
                <p>Strong Authentication Mechanism</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Secure Data Storage</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Secure and Updated CMS</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Monitor Server Activity</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Implement Security Measures</p>
              </li>
            </ul>
          </article>

        <article className="service">
          <div className="service_head">
            <h3>Software Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className='service_list-icon' />
              <p>Implement Secure APIs</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Develop end-to-end Web Apps</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Utilize Modern Frameworks</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Design Efficient Database</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Secure CMS Configuration</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>UI / UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className='service_list-icon' />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>User Experience (UX) Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Interactive Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Mobile App Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Graphic Design</p>
            </li>
          </ul>
        </article>

        <article className="service">
            <div className="service_head">
              <h3>Search Engine Optimization</h3>
            </div>
            <ul className="service_list">
              <li>
                <FaCheck className='service_list-icon' />
                <p>Fast Loading Website Speed</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Keyword Research & Image Texts</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>On-Page Optimization</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Structured Data Markup</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Meta Description and Title Tags</p>
              </li>
            </ul>
          </article>

        <article className="service">
          <div className="service_head">
            <h3>Management</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className='service_list-icon' />
              <p>Content Creation</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Platform Management</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Community Engagement</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Analytics and Reporting</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Social Media Strategy</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services
