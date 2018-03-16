import React, {Component} from 'react';

export default class CardCar extends Component {
  render () {
    return (
      <div className="carshome-suggestion">
        <h2 className="text-center">CarsHome Suggestion</h2>
        <div className="container">
          <ul>
            <li id="suggestion-item-1">
              <h3>BMW X5</h3>
              <img src="images/bmw-x5.png" alt="Car Image" />
              <span className="price">MSRP $57,200</span>
              <p>Lorem Ipsum</p>
              <p>Dolor sit amet</p>
            </li>
            <li id="suggestion-item-2">
              <h3>BMW X5</h3>
              <img src="images/bmw-x5.png" alt="Car Image" />
              <span className="price">MSRP $57,200</span>
              <p>Lorem Ipsum</p>
              <p>Dolor sit amet</p>
            </li>
            <li id="suggestion-item-3">
              <h3>BMW X5</h3>
              <img src="images/bmw-x5.png" alt="Car Image" />
              <span className="price">MSRP $57,200</span>
              <p>Lorem Ipsum</p>
              <p>Dolor sit amet</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
