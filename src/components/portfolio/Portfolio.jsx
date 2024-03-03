import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'

import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           "y",   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Latest Project</h2>
      <div className="container portfolio_container">
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3 style={{color:'rgb(89, 0, 255)'}}><b>SMS Software: "Student Management System"</b></h3>
          <p>SMS Software acts as the bottom line database to store all the day-to-day school operations, maintain the proper records of the past few decades, regulate the various operation modules, managing the critical tasks, handling the admin tasks.</p>
          <h5>Tech Stack Used: HTML, CSS, SCSS, JavaScript, Bootstrap, Jquery, Ajax, PHP & MySQL</h5>
          <div className="portfolio_item-cta">
            <a href="https://studentmanagementsystem-lakshay.000webhostapp.com/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/LakshayD02/Student_Management_System" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3 style={{color:'rgb(89, 0, 255)'}}><b> "E-Learn :  Online Learning Web-Portal/Platform" </b></h3>
          <p>Students can access free courses on this E-learning website (E-Learn) and learn online with its assistance. Any user can sign up as a tutor or teacher and post the necessary learning materials and lectures for the students.</p>
          <h5>Tech Stack Used: HTML, CSS, JavaScript, Bootstrap, Jquery, Ajax, PHP, Xampp & MySQL</h5>
          <div className="portfolio_item-cta">
            <a href="https://elearningwebportal.000webhostapp.com/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/LakshayD02/E-Learning_Website" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3 style={{color:'rgb(89, 0, 255)'}}><b>"BikeThrills: Online Bike Renting Website" </b></h3>
          <p>A Responsive Bike Renting Website with Database which helps users rent bikes on rent on a daily basis. The users can register themselves as renters and can take any bike as shown on the website by uplaoding license as proof.</p>
          <h5>Tech Stack Used: HTML, CSS, JavaScript, Bootstrap, Jquery, Ajax, PHP, Xampp & MySQL</h5>
          <div className="portfolio_item-cta">
            <a href="https://bikethrills.000webhostapp.com/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/LakshayD02/Bikethrills-Website" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3 style={{color:'rgb(89, 0, 255)'}}> <b>"The Library Zone: Online Library Management System" </b></h3>
          <p>This LMS manages and stores book information electronically according to student needs. It allows both the admin and student to search for the desired book and helps to keep a constant track of all the books available in the library.</p>
          <h5>Tech Stack Used: HTML, CSS, JavaScript, Bootstrap, Jquery, Ajax, PHP, Xampp & MySQL</h5>
          <div className="portfolio_item-cta">
            <a href="https://libraryzoneproject.000webhostapp.com/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/LakshayD02/The-Library-Zone_LMS" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3 style={{color:'rgb(89, 0, 255)'}}><b>"OS-Sentinel: Mobile App Landing Page" </b></h3>
          <p>This landing page is designed to promote & provide information about a specific mobile application. Its primary purpose is to capture the attention of potential users, showcase the app's features and benefits, and persuade visitors to download & install the app.</p>
          <h5>Tech Stack Used: HTML, CSS, JavaScript, Bootstrap and Font Awesome</h5>
          <div className="portfolio_item-cta">
            <a href="https://mobilelandingpage-lakshay.netlify.app/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/LakshayD02/Mobile-App-Landing-Page" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3 style={{color:'rgb(89, 0, 255)'}}><b> "Foodeez Corner: Online Food Ordering Website" </b></h3>
          <p>This Fast Food Restaurant Website built using Front-End Technologies involves designing a user-friendly interface to showcase the restaurant's menu, information, and possibly allow users to make reservations or contact the restaurant.</p>
          <h5>Tech Stack Used: HTML, CSS, JavaScript, Bootstrap and Font Awesome</h5>
          <div className="portfolio_item-cta">
            <a href="https://thefoodeezcorner.netlify.app/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/LakshayD02/Foodeez-Corner" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
      </div>
    </section>
  )
}

export default portfolio