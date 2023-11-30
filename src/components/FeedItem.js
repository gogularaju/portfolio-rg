import React from 'react';
import gapLogo from '../gapLogo.jpg';
import dbsLogo from '../dbsLogo.png';
import tcsLogo from '../tcsLogo.png';
import appleLogo from '../appleLogo.jpg';

const images = {
  1: appleLogo,
  2: gapLogo,
  3: dbsLogo,
  4: tcsLogo
};

const FeedItem = (item) => {
  return (
    <div className="row marketing experience-card">
      <div className="card">
        <img src={images[item.feed.id]} alt={item.feed.title}/>
        <div class="card-container">
          <h4><b>{item.feed.subtitle}</b></h4> 
          <p>{item.feed.duration}</p> 
        </div>
      </div>
    </div>
  );
}

export default FeedItem; 
