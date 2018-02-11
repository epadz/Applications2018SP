import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './App.css';
import Home from './home';
import Listings from './listings';

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
          <div className="search">Search</div>
          <div className="cart"><Glyphicon glyph="shopping-cart" /></div>
        </div>
        <div className="content">
          <Listings />
        </div>
      </div>
    );
  }
}

export default App;
