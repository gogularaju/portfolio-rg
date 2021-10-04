import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../profilePhoto.jpg';


const Navigation = (props) => {

  const scrollToEl = (id) => {
    const scrollOptions = { behavior: "smooth", block: "end", inline: "nearest" };
    const el = document.getElementById(id);
    el.scrollIntoView(scrollOptions);
  }


  return (
    <div className="header">
       <div className="nav-section">
        <ul className="nav nav-pills">
            <li className="nav nav-pills nav-link" onClick={() => scrollToEl('aboutId')}><Link to="/">About Me</Link></li>
            <li className="nav nav-pills nav-link" onClick={() => scrollToEl('experienceId')}><Link to="/">Experience</Link></li>
            <li className="nav nav-pills nav-link" onClick={() => scrollToEl('portfolioId')}><Link to="/">Portfolio</Link></li>
            <li className="nav nav-pills nav-link" onClick={() => scrollToEl('footer')}><Link to="/">Contact</Link></li>
        </ul>
      </div>
      <div className="profile-section">
        <span><img className="profile-photo" src={profilePhoto} alt="profile-photo" width="112px" height="112px" /></span>
        <span> <h3 className="profile-title">Raju Gogula</h3></span>
      </div>
    </div>
  );
}

export default Navigation; 