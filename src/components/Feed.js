import React from 'react';
import FeedItem from './FeedItem';
import About from './About';
import PortFolio from './portfolio';

const Feed = (props) => {
  return (
    <div>
      <div className="feed-container-about" id="aboutId">
      <About />
      </div>
      <div className="feed-container-experience" id="experienceId">
      { props.feeds.map((item) => 
        <FeedItem key={item.id} feed={item} />
      )}
      </div>
      <div className="feed-container-portfolio" id="portfolioId">
      { props.feeds.map((item) => 
        <PortFolio key={item.id} feed={item} />
      )}
      </div>
    </div>
  )
}

export default Feed; 
