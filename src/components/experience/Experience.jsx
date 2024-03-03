import React from 'react'
import './experience.css'
/* import { LiaAccessibleIcon } from "react-icons/lia";
import { BsBalloonFill } from "react-icons/bs"; */
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { Tilt } from 'react-tilt'
import about from '../about/About'


const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          0.5,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}



const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Posses</h5>
      <h2>My Tech Stack</h2>

      <div className="container experience_container">
        <Tilt>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>HTML</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>CSS</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>JavaScript</h4>
                <small className='text-light'>Master</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Bootstrap</h4>
                <small className='text-light'>Master</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>React</h4>
                <small className='text-light'>InterMediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Next JS</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

          </div>

        </div>
        </Tilt>
        <Tilt>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Python</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>PHP</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Django</h4>
                <small className='text-light'>Internmediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Codeigniter</h4>
                <small className='text-light'>InterMediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>NodeJs</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Express.Js</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

          </div>

        </div>
        </Tilt>
        <Tilt>
        <div className="experience_backend">
          <h3>Databases and Hosting</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>MySQL</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Xampp</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>PostgreSQL</h4>
                <small className='text-light'>InterMediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>firebase</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Heroku</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

          </div>

        </div>
        </Tilt>
        <Tilt>
        <div className="experience_backend">
          <h3>UI / UX Design</h3>
          <div className="experience_content">

          <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>WordPress</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Figma</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>WixStudio</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Adobe</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>WebFlow</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>WireFrame</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

          </div>

        </div>
        </Tilt>
      </div>
    </section>
  )
}

export default experience