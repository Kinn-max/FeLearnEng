import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  
  for (let i = 0; i < rating; i++) {
    stars.push(<i key={i} className="fa fa-star text-warning"></i>);
  }

  return <div>{stars}</div>;
};

export default StarRating;
