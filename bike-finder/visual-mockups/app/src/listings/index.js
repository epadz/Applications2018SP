import React, {Component} from 'react';
import ProductTile from './productTile';
import Filter from './filter';
import ColorFilter from './colorFilter';
import ActiveFilter from './activeFilter';
import DropDown from "../common/dropDown";
import './index.css';

import Trek from '../assets/logos/trek.png';
import Slash from '../assets/bikes/trekSlash.jpg';
import TopFuel from '../assets/bikes/trekTopFuel.jpg';

import Cannondale from '../assets/logos/cannondale.png';
import Habit from '../assets/bikes/cannondaleHabit.jpg';

import Specialized from '../assets/logos/specialized.png';
import Rockhopper from '../assets/bikes/specializedRockhopper.jpg';

class Listings extends Component {

  render() {
    return (
        <div className="listings">
          <div className="filters">
            <Filter title="Type"/>
            <Filter title="Gender" expanded items={['Men\'s', 'Women\'s', 'Unisex']} selected={[true, false, false]}/>
            <Filter title="Price"/>
            <Filter title="Brand"/>
            <Filter title="Frame Material"/>
            <Filter title="Model Year"/>
            <ColorFilter
                title="Color"
                expanded
                items={[
                  '#ff3a33',
                  '#FF9133',
                  '#FFBD34',
                  '#05B611',
                  '#05868C',
                  '#3154AB',
                  '#0D2C78',
                  '#000000',
                  '#888888',
                  '#ffffff',
                ]}
                selected={[true, false, false, true, false, false, false, true, false, false]}
            />
            <Filter title="Gear Shifter"/>
            <Filter title="Brakes"/>
            <Filter title="Suspension"/>
            <Filter title="Features"/>
          </div>
          <div className="main">
            <div className="refinements">
              <div className="activeFilters">
                <ActiveFilter title="Mountain" />
                <ActiveFilter title="Men's" />
              </div>
              <div className="sort">
                <DropDown selected="Relevance" type="sort" options={['Price', 'Rating', 'Relevance', 'A-Z', 'Z-A']} />
              </div>
            </div>
            <div className="pinned">
              <ProductTile name="Slash 9.8" image={Slash} price="$1,200" logo={Trek} rating={0.75} year="2018" desc="Advanced Trick Bike"/>
            </div>
            <div className="results">
              <ProductTile name="Slash 9.8" image={Slash} price="$1,200" logo={Trek} rating={0.75} year="2018" desc="Advanced Mountain"/>
              <ProductTile name="Top Fuel" image={TopFuel} price="$3,100" logo={Trek} rating={0.85} year="2018" desc="Advanced Mountain"/>
              <ProductTile name="Habit 4" image={Habit} price="$4,200" logo={Cannondale} rating={1.0} year="2018" desc="Intermediate Trail"/>
              <ProductTile name="Rockhopper Comp" image={Rockhopper} price="$650" logo={Specialized} rating={0.45} year="2018" desc="Entry Level Mountain"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Listings;