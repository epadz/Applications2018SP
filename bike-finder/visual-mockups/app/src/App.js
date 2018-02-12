import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './App.css';
import Home from './home';
import Listings from './listings';
import Product from './product';

const HOME = 'HOME';
const LISTINGS = 'LISTINGS';
const PRODUCT = 'PRODUCT';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: HOME,
    }
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo">QuickCycle</div>
          <div className="search"><Glyphicon glyph="search" /></div>
          <div className="cart"><Glyphicon glyph="shopping-cart" /><div className="numItemsInCart">1</div></div>
        </div>
        <div className="content">
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
