import React from 'react';
import gapLogo from '../gapLogo.png';
import dbsLogo from '../dbsLogo.png';
import tcsLogo from '../tcsLogo.png';

const images = {
  1: gapLogo,
  2: dbsLogo,
  3: tcsLogo
};

const FeedItem = (item) => {
  return (
    <div className="row marketing experience-card">
      <div class="card">
        <img src={images[item.feed.id]} alt={item.feed.title} width={item.feed.width} height={item.feed.height}/>
        <div class="card-container">
          <h4><b>{item.feed.subtitle}</b></h4> 
          <p>{item.feed.duration}</p> 
        </div>
      </div>
    </div>
  );
}

export default FeedItem; 
