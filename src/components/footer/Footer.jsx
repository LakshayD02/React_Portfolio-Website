import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaBlogger, FaTelegram, FaWhatsapp } from "react-icons/fa6";

const footer = () => {
  return (
    <footer>
      <a href="https://linktr.ee/lakshaydhoundiyal" target='_blank' className="footer_logo">Lakshay Dhoundiyal</a>

      <ul className="permalinks">
        <li><a href="https://drive.google.com/drive/folders/1BegbFK_gz-DIm5iR5iM2gw-Rv35DDLJ1?usp=sharing" target='_blank'>Letter of Recommendations</a></li>
        <li><a href="https://drive.google.com/drive/folders/1ZuuYqYpbE6lofig8MbIFnlsTUlqQ--KX?usp=sharing" target='_blank'>Professional Courses</a></li>
        <li><a href="https://drive.google.com/drive/folders/1Powlhl0NBAKl__EEY5b6havdXQES_aGa?usp=sharing" target='_blank'>Research Papers</a></li>
        <li><a href="https://drive.google.com/drive/folders/1Yqssa_IPeheoNVcm0FWGXEVtrCkILknJ?usp=sharing" target='_blank'>Profile Cover Letters</a></li>
        <li><a href="https://drive.google.com/drive/folders/1SVrsn63xj2R8EKQxQzIYkzbovBkgFzmS?usp=sharing" target='_blank'>My Other Resumes</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/lakshay-dhoundiyal-531b25259" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/LakshayD02" target='_blank'><BsGithub /></a>
        <a href="https://hackersinsight.blogspot.com/" target='_blank'><FaBlogger /></a>
        <a href="https://t.me/LakshayDhoundiyal" target='_blank'><FaTelegram /></a>
        <a href="https://api.whatsapp.com/send?phone=9560547779" target='_blank'><FaWhatsapp /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Lakshay Dhoundiyal. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer