import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './index.css';

const StarRating = ({rating = 1}) => {
  return (
      <div className="starRating">
        <div className="emptyStars">
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
        </div>
        <div className="filledStars" style={{width: `${100 * rating}px`}}>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
        </div>
      </div>
  );
};

export default StarRating;