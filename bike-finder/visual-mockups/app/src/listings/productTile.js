import React, { Component } from 'react';
import StarRating from '../common/starRating';
import './index.css';

class ProductTile extends Component {

  render() {
    return (
        <div className="productTile">
          <div style={{flex:3}}>
            <div className="colorOptions">
              <div className="colorOption" style={{backgroundColor: '#ff3a33'}} />
              <div className="colorOption" style={{backgroundColor: '#000000'}} />
              <div className="colorOption" style={{backgroundColor: '#0D2C78'}} />
            </div>
            <div className="productImage" style={{backgroundImage:`url(${this.props.image})`}} />
          </div>
          <div style={{flex:1}}>
            <div className="logo" style={{backgroundImage:`url(${this.props.logo})`}} />
            <div className="title"><span style={this.props.name.length > 9 ? {fontSize: '.5em'} : {}}>{this.props.name}</span></div>
          </div>
          <div style={{flex:1}}>
            <div className="info">
              <div className="starRating"><StarRating rating={this.props.rating} /></div>
              <div className="year">{this.props.year}</div>
              <div className="types">{this.props.desc}</div>
            </div>
            <div className="price">{this.props.price}</div>
          </div>
        </div>
    );
  }
}

export default ProductTile;