import React, {Component} from 'react';

export default class HowItWork extends Component {
  render () {
    return (
      <div className="how-it-works">
        <div className="container">
          <h2 className="text-center">How it Works</h2>
          <div className="row flex">
            <div className="grid">
              <h3>Select your Car</h3>
              <p>We have partered with 100 dealers to get you unbeatable lease offers</p>
            </div>
            <div className="grid">
              <h3>CHOOSE YOUR LEASE TERMS</h3>
              <p>We scan every lender possible to ensure you qualify for all rebates and get the absolute best lease rate.</p>
            </div>
            <div className="grid">
              <h3>SCHEDULE DELIVERY</h3>
              <p>After you select your lease preferences the car is filled up with gas, washed and delivered. Free of charge.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
