import React, { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaBlogger, FaUser } from 'react-icons/fa6';
import './header.css'; // Import CSS for styling

const HeaderSocials = () => {
  const [tooltip, setTooltip] = useState('');

  const handleMouseEnter = (name) => {
    setTooltip(name);
  };

  const handleMouseLeave = () => {
    setTooltip('');
  };

  return (
    <div className="header_socials">
      <a
        href="https://lakshaydhoundiyalportfolio.netlify.app/"
        target="_blank"
        onMouseEnter={() => handleMouseEnter('Portfolio')}
        onMouseLeave={handleMouseLeave}
      >
        <FaUser />
      </a>
      <span className={tooltip === 'Portfolio' ? 'tooltip active' : 'tooltip'}>
        Portfolio
      </span>
      <a
        href="https://www.linkedin.com/in/lakshay-dhoundiyal-531b25259"
        target="_blank"
        onMouseEnter={() => handleMouseEnter('LinkedIn')}
        onMouseLeave={handleMouseLeave}
      >
        <BsLinkedin />
      </a>
      <span className={tooltip === 'LinkedIn' ? 'tooltip active' : 'tooltip'}>
        LinkedIn
      </span>
      <a
        href="https://github.com/LakshayD02"
        target="_blank"
        onMouseEnter={() => handleMouseEnter('GitHub')}
        onMouseLeave={handleMouseLeave}
      >
        <BsGithub />
      </a>
      <span className={tooltip === 'GitHub' ? 'tooltip active' : 'tooltip'}>
        GitHub
      </span>
      <a
        href="https://hackersinsight.blogspot.com/"
        target="_blank"
        onMouseEnter={() => handleMouseEnter('Blogger')}
        onMouseLeave={handleMouseLeave}
      >
        <FaBlogger />
      </a>
      <span className={tooltip === 'Blogger' ? 'tooltip active' : 'tooltip'}>
        Blogger
      </span>
    </div>
  );
};

export default HeaderSocials;
