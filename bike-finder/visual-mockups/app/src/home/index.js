import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './index.css';
import img2 from '../assets/bikes/trekProcaliber2.jpg';
import Rockhopper from '../assets/bikes/specializedRockhopper.jpg';
import {LISTINGS} from "../App";

class Home extends Component {

  render() {
    return (
        <Scrollbars style={{width: '100%', height: '100%'}}>
          <div className="page">
            <div className="categories">
              <div className="categoryRow">
                <div className="category"><div>Road</div></div>
                <div className="category" onClick={() => this.props.setPage(LISTINGS)}><div>Mountain</div></div>
                <div className="category"><div>BMX</div></div>
                <div className="category"><div>Commuter</div></div>
              </div>
              <div className="categoryRow">
                <div className="category"><div>Kids</div></div>
                <div className="titleTile"><div>A Bike for Every Need</div></div>
                <div className="category"><div>Cross</div></div>
              </div>
              <div className="categoryRow">
                <div className="category"><div>Electric</div></div>
                <div className="category"><div>Racing</div></div>
                <div className="category"><div>Fixed Gear</div></div>
                <div className="category"><div>Leisure</div></div>
              </div>
            </div>
            <div className="features">
              <div className="featured">
                <div className="featuredHeader" >Featured Bikes</div>
                <div className="featuredImage" style={{backgroundImage: `url(${img2})`}} />
              </div>
              <div className="featured">
                <div className="featuredHeader" >On Sale Now</div>
                <div className="featuredImage" style={{backgroundImage: `url(${Rockhopper})`}} />
              </div>
            </div>
          </div>
        </Scrollbars>
    );
  }
}

export default Home;