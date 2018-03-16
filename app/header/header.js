import React, {Component} from 'react';
// import Navbar from './menu';

export class PreHeader extends Component {
  render () {
    return (
      <div className="pre-header container">
        {/*<Navbar />*/}
        <div className="logo">
          <a href="javascript:void(0);"><img src="images/logo.png" alt="CarsHome" /></a>
        </div>
        <div className="mobile-icons">
          <div className="dealer-center">
            <span>Find your local Dealer Center &nbsp; | &nbsp; </span>
            <div className="change-location">
              <a href="javascript:void(0);">
                <span>Change Location </span>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29 29" enableBackground="new 0 0 29 29">
                  <g>
                    <defs>
                      <rect id="SVGID_17_" x="-638" y="-10" width="414" height="734"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                      <use xlinkHref="#SVGID_17_"  overflow="visible"/>
                    </clipPath>
                  </g>
                  <circle fill="#F5891F" className="show-in-mobile" cx="14.5" cy="14.5" r="14.5"/>
                  <g>
                    <path fill="#444" d="M14.5,22.5c0.5-0.9,0.9-1.7,1.3-2.5c0.9-1.6,1.8-3.2,2.6-4.9c0.4-0.7,0.7-1.4,0.9-2.2
                      c0.6-1.9,0.1-3.6-1.3-5c-2.7-2.7-7.2-1.6-8.5,2c-0.4,1.3-0.3,2.5,0.3,3.7c0.5,1.2,1.2,2.3,1.8,3.4c0.9,1.7,1.8,3.3,2.7,5
                      C14.4,22.3,14.4,22.4,14.5,22.5z M16.8,11.6c0,1.3-1,2.3-2.3,2.3c-1.2,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3
                      C15.7,9.3,16.8,10.4,16.8,11.6z"/>
                  </g>
                </svg>
              </a>
              <div className="cl-modal">
                <div className="cl-modal-body">
                  <h4 className="raleway-italic">Find dealers by Location</h4>
                  <form>
                    <div className="form-group">
                      <input type="text" name="enter-zip" placeholder="Enter ZIP"/>
                      <input type="submit" className="btn" name="submit-cl" value="Submit"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="phone">
            <a href="tel:+16266065055">
              <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29 29" enableBackground="new 0 0 29 29">
                <circle fill="#F5891F" className="show-in-mobile" cx="14.5" cy="14.5" r="14.5"/>
                <path fill="#444" d="M6.8,9.9c0,1.5,0.4,2.7,1,3.9c1.9,3.1,4.3,5.6,7.5,7.2c1.1,0.6,2.3,1,3.5,1.1c1.3,0.1,2.4-0.3,3.4-1.2
                  c0,0,0.1-0.1,0.1-0.1c0.9-0.7,0.6-1.7,0-2.2c-0.8-0.7-1.5-1.5-2.3-2.2c-0.5-0.5-1.2-0.5-1.6,0c-0.4,0.4-0.8,0.8-1.2,1.2
                  c-0.1,0.1-0.2,0.2-0.3,0.1c-1.9-1.2-3.6-2.6-4.9-4.5c-0.2-0.3-0.3-0.6-0.5-0.9c-0.1-0.1-0.1-0.2,0.1-0.4c0.4-0.3,0.7-0.7,1.1-1.1
                c0.6-0.6,0.6-1.3,0-1.9C11.8,8,11,7.1,10.1,6.4C9.7,5.9,8.9,6,8.3,6.5C7.3,7.5,6.8,8.7,6.8,9.9z"/>
              </svg>
              <span>&nbsp; +1 6266065055</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default class Header extends Component {
  render () {
    return (
      <header className="header container flex">
        <div className="logo">
          <a href="javascript:void(0);"><img src="images/logo.png" alt="CarsHome" /></a>
        </div>
        <div className="filter">
          <span>Your Selected Car</span>
          <div>
            <select className="dd-border-bottom car-company">
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              <option value="hyundai">Hyundai</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
            </select>
            <select className="dd-border-bottom car-model">
              <option value="x3">X3</option>
              <option value="x4">X4</option>
              <option value="x5">X5</option>
              <option value="x6">X6</option>
              <option value="x7">X7</option>
            </select>
          </div>
        </div>
      </header>
    );
  }
}
