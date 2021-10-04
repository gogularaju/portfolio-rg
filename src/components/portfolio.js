import React from 'react';

const PortFolio = (item) => {
  return (
    <div className="row marketing">
      <div class="card">
        <div class="card-container">
          <h4><b>{item.feed.subtitle}</b></h4> 
          <p>{item.feed.duration}</p> 
        </div>
      </div>
    </div>
  );
}

export default PortFolio; 
