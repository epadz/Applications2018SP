import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { ColorDot, StarRating } from '../common';
import './index.css';

const ProductTile = ({image, logo, name, rating, year, desc, price, colors = [], small = false, pinned = false}) => {
  return small ? (
      <div className="productTileSM">
        <div style={{flex: 1}}>
          <div className="title"><span style={name.length > 9 ? {fontSize: '.5em'} : {}}>{name}</span></div>
          <div className="pinButton"><Glyphicon glyph="heart" /></div>
        </div>
        <div style={{flex:3}}>
          <div className="productImage" style={{backgroundImage:`url(${image})`}} />
        </div>
        <div style={{flex:'0 0 30px'}}>
          <div className="logo" style={{backgroundImage:`url(${logo})`}} />
          <div className="price">{price}</div>
        </div>
        <div style={{flex:'0 0 16px'}}>
          <div className="year">{year}</div>
          <div className="starRating" ><StarRating rating={rating} size="sm" style={{float:'right'}} /></div>
        </div>
      </div>
  ) : (
      <div className="productTile">
        <div style={{flex:3}}>
          <div className="colorOptions">
            {
              colors.map((color, i) => <ColorDot colors={color} key={i} />)
            }
          </div>
          <div className="productImage" style={{backgroundImage:`url(${image})`}} />
        </div>
        <div style={{flex:'0 0 50px'}}>
          <div className="logo" style={{backgroundImage:`url(${logo})`}} />
          <div className="title"><span style={name.length > 9 ? {fontSize: '.5em'} : {}}>{name}</span></div>
        </div>
        <div style={{flex:'0 0 50px'}}>
          <div className="info">
            <div className="starRating"><StarRating rating={rating} /></div>
            <div className="year">{year}</div>
            <div className="types">{desc}</div>
          </div>
          <div className="price">{price}</div>
        </div>
        <div className="pinButton"><Glyphicon glyph={pinned ? 'heart' : 'heart-empty'} /></div>
      </div>
  );
};

export default ProductTile;