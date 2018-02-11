import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './index.css';

const ActiveFilter = ({title}) => {
  return (
      <div className="activeFilter">
        <span className="filterName">{title}</span>
        <div className="remove">
          <Glyphicon glyph="remove" />
        </div>
      </div>
  );
};

export default ActiveFilter;