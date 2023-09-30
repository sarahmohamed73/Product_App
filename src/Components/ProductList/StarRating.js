import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    
    i <= rating ? stars.push(<FontAwesomeIcon icon={fasStar}/>) : stars.push(<FontAwesomeIcon icon={farStar} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;