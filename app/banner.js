import React, {Component} from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

export class BannerTitle extends Component {
  render () {
    return (
      /*<!-- Banner title -->*/
      <div className="banner-title">
        <div className="container">
          <ul className="text-center">
            <li>Drive Your Car</li>
            <li>Select Our Offer</li>
            <li>Schedule Delivery</li>
          </ul>
        </div>
      </div>
      /*<!-- End of Section -->*/
    );
  }
}
function modal_open() {
  console.log('Click');

}
export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
       redText: false
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }
  addClass() {
    this.setState({
      redText:true
    });
  }
  removeClass() {
    this.setState({
      redText:false
    });
  }

  render () {
    return (
      /*<!-- Banner -->*/
      <div className="banner modal-wrap">
        <div className="container flex">
          <div className="left-side">

            <div className="btn-group">
              <a href="javascript:void(0);" id="want-finance" className="btn open-1st-modal" onClick={this.addClass}>I want to FINANCE</a>
              <a href="javascript:void(0);" id="want-lease" className="btn open-1st-modal" onClick={this.addClass}>I want to LEASE</a>
              <a href="javascript:void(0);" id="schedule-test-drive" className="btn show-in-mobile open-1st-modal" onClick={this.addClass}>Schedule TEST DRIVE</a>
            </div>

            {/*<!-- (1) Pop-up: Form & Map -->*/}
            <div className="modal location-fields-wrap popup-form-steps">
              <div className={classNames("modal-overlay modal-location__overlay", {"show-modal":this.state.redText})}></div>
              <div className={classNames("modal-container modal-forms modal-location__container", {"show-modal":this.state.redText})}>
                <div className="modal-body">
                  <div className="flex">
                    <div className="location-fields raleway-italic">
                      <form name="form_name_location" method="post">
                        <div className="form-group">
                          <label className="pop-up1-tabindex1">Your Selected Car</label>
                          <select id="popup-location-select-brand" className="dd-border-bottom car-company popup-form__select-field">
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                            <option value="hyundai">Hyundai</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                          </select>
                          <select id="popup-location-select-model" className="dd-border-bottom car-model popup-form__select-field">
                            <option value="x3">X3</option>
                            <option value="x4">X4</option>
                            <option value="x5">X5</option>
                            <option value="x6">X6</option>
                            <option value="x7">X7</option>
                          </select>
                        </div>
                        <div className="form-group form-group2">
                          <label className="zip-code-lbl">Enter the ZIP code</label>
                          <script src="https://maps.googleapis.com/maps/api/js?sensor=false&libraries=places&language=en"></script>
                          <input type="text" id="autocomplete" className="popup-form__text-field" name="zip_code" placeholder="Enter City / ZIP code" />
                         {/* <script>
                            function initialize() {
                              var options = {
                                types: ['(cities)'],
                                componentRestrictions: {country: "USA"}
                              };
                              var input = document.getElementById('autocomplete');
                              var autocomplete = new google.maps.places.Autocomplete(input, options);
                            }
                            google.maps.event.addDomListener(window, 'load', initialize);
                          </script>*/}
                        </div>
                        <div className="form-action">
                          <button name="submit_location" id="submit-city-location-btn" className="btn popup-form__btn">SUBMIT</button>
                        </div>
                      </form>
                    </div>
                    <div className="location-map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2739631375!2d-118.69191211229607!3d34.02016132549629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1517423290016" width="440" height="440"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!--  End of (1) Pop-up -->*/}

            {/*<!-- (2) Pop-up: What is your credit score? -->*/}
            <div className="modal popup-form-steps">
              <div className="modal-overlay modal-credit__overlay"></div>
              <div className={classNames("modal-container modal-forms modal-credit__container", {"show-modal":this.state.redText})}>
                <div className="modal-body">
                  <div className="middle-div">
                    <div className="inner-div">
                      <div className="credit-score text-center raleway-italic">
                        <form>
                          <h2 className="pop-up2-tabindex1">Select your credit score</h2>
                          <div className="custom-select">
                            <select id="dd_credit_id" className="dd-rounded popup-form__select-field">
                              <option value="0">-- Select --</option>
                              <option value="1">Less than 500</option>
                              <option value="2">500 - 600</option>
                              <option value="3">600 - 700</option>
                              <option value="4">700 - 800</option>
                              <option value="5">More than 800</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!--  End of (2) Pop-up -->*/}

            {/*<!-- (3) Pop-up: Progress bas -->*/}
            <div className="modal modal-show-in-bg modal-show popup-form-steps modal-progress">
              <div className="modal-overlay modal-progress_overlay"></div>
              <div className="modal-container modal-forms modal-progress_container">
                <div className="modal-body">
                  <div className="middle-div">
                    <div className="inner-div">
                      <div className="progress-bar-wrap text-center raleway-italic">
                        <span className="progress-lbl" id="progress-text">Looking for the best deal</span>
                        <span className="progress-value" id="progress-value">0%</span>
                        <div id="myProgress">
                          <div id="myBar">0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!--  End of (3) Pop-up -->*/}

            {/*<!-- (4) Pop-up: Enter your email -->*/}
            <div className="modal popup-form-steps">
              <div className="modal-overlay modal-overlay-blue modal-email__overlay"></div>
              <div className="modal-container modal-forms modal-email__container">
                <div className="bg-price-img">
                  <img src="images/pop-up-bg-small.jpg" alt="price-list-bg" />
                </div>
                <div className="modal-body">
                  <div className="middle-div">
                    <div className="inner-div">
                      <div className="email-field text-center raleway-italic">
                        <form id="popup-email-submit-form" name="email_validate" method="post">
                          <h2>Enter your email</h2>
                          <span className="sub-lbl"><img src="images/right-arrow-circular-button.svg" alt="->" /> Almost done! Enter your email to get your deal.</span>
                          <div className="form-group">
                            <input type="email" id="popup-email-input-text-field" className="popup-form__text-field" name="email_field" placeholder="Valid Email Address" autoFocus/>
                            <button id="popup-email-submit-btn" name="email" className="btn popup-form__btn">Submit</button>
                          </div>
                        </form>
                        <div className="email-field-footer">
                          <hr />
                          <div className="norton-logo">
                            <img src="images/norton-secure-seal.png" alt="Norton" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!--  End of (4) Pop-up -->*/}

            {/*<!-- (5) Pop-up: Enter your name -->*/}
            <div className="modal popup-form-steps">
              <div className="modal-overlay modal-overlay-blue modal-name__overlay"></div>
              <div className="modal-container modal-forms modal-name__container">
                <div className="bg-price-img">
                  <img src="images/pop-up-bg-small.jpg" alt="price-list-bg" />
                </div>
                <div className="modal-body">
                  <div className="middle-div">
                    <div className="inner-div">
                      <div className="email-field name-field text-center raleway-italic">
                        <form name="name_validate" method="post">
                          <h2>Enter your name</h2>
                          <span className="sub-lbl"><img src="images/right-arrow-circular-button.svg" alt="->" /> Next, our system will display your ballpark estimate.</span>
                          <div className="form-group">
                            <input type="text" id="popup-first-name-input-text-field" className="popup-form__text-field" name="first_name" placeholder="First" />
                            <input type="text" id="popup-last-name-input-text-field" className="popup-form__text-field" name="last_name" placeholder="Last" />
                            <button type="button" id="popup-name-submit-btn" name="name" className="btn popup-form__btn">Submit</button>
                          </div>
                        </form>
                        <div className="email-field-footer">
                          <hr />
                          <div className="norton-logo">
                            <img src="images/norton-secure-seal.png" alt="Norton" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!--  End of (5) Pop-up -->*/}

            {/*<!-- (6) Pop-up: Enter your number -->*/}
            <div className="modal popup-form-steps">
              <div className="modal-overlay modal-overlay-blue modal-number__overlay"></div>
              <div className="modal-container modal-forms modal-number__container">
                <div className="bg-price-img">
                  <img src="images/pop-up-bg-small.jpg" alt="price-list-bg" />
                </div>
                <div className="modal-body">
                  <div className="middle-div">
                    <div className="inner-div">
                      <div className="email-field number-field text-center raleway-italic">
                        <form name="phone_validate" method="post">
                          <h2>Enter your number</h2>
                          <span className="sub-lbl"><img src="images/right-arrow-circular-button.svg" alt="->" /> One last thing! Enter your number to get your deal.</span>
                          <div className="form-group">
                            <input type="text" id="phone" className="popup-form__text-field" name="phone_number" placeholder="(XXX) XXX-XXXX" />
                            <button type="button" id="popup-number-submit-btn" name="get-quotes" className="btn popup-form__btn">Get My Quotes</button>
                          </div>
                        </form>
                        <div className="email-field-footer">
                          <p>By clicking on the "Get My Quotes" button I am verifying that I am over 18 years of age and agree to the Terms of Use and Privacy Policy. My "click" is my expressed written consent to be contacted via email, text, SMS or phone (including the use of autodialed calls or prerecorded calls) by Quote Runner LLC. and its moving partners that can quote or service my move, as well as companies offering other useful products or services. My consent supercedes any registration on any do-not-call list. Consent is required to proceed, but is not a condition of any purchase.</p>
                          <hr />
                          <div className="norton-logo">
                            <img src="images/norton-secure-seal.png" alt="Norton" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!--  End of (6) Pop-up -->*/}
          </div>
          <div className="right-side">
            <img src="images/bmw-x5.png" alt="Car Image" />
          </div>
        </div>
      </div>
      /*<!-- End of Banner -->*/
    );
  }
}
export class GalleryModal extends Component {
  render () {
    return (

      <div className="gallery-btn container flex">
        <ul className="car-details hide-in-mobile">
          <li>Staring MSRP $56,600<sup>12</sup></li>
          <li>56 EPA rated MPGe<sup>e</sup></li>
          <li>455 Top Horsepower<sub>2</sub></li>
          <li>3 Up to 3 Rows of Seating<sup>3</sup></li>
        </ul>
        <div className="modal">
          <a href="javascript:void(0);" className="gallery-icon modal-link">
            <span className="show-in-mobile">View Detail</span>
            <img src="images/view-gallery-icon.svg" className="hide-in-mobile" alt="Gallery" />
          </a>
          <div className="modal-container modal-dark-bg modal-gallery__container">
            <div className="modal-close">
              <a href="javascript:void(0);">X</a>
            </div>
            <div className="modal-body">
              <div className="gallery-img">
                <ul className="gallery-img-item">
                  <li><img src="images/NEW_DESIGN_02-11.jpg" alt="Images" /></li>
                  <li><img src="images/NEW_DESIGN_02-11.jpg" alt="Images" /></li>
                  <li><img src="images/NEW_DESIGN_02-11.jpg" alt="Images" /></li>
                  <li><img src="images/NEW_DESIGN_02-11.jpg" alt="Images" /></li>
                  <li><img src="images/NEW_DESIGN_02-11.jpg" alt="Images" /></li>
                  <li><img src="images/NEW_DESIGN_02-11.jpg" alt="Images" /></li>
                </ul>
                <ul className="car-details">
                  <li>Staring MSRP $56,600<sup>12</sup></li>
                  <li>56 EPA rated MPGe<sup>e</sup></li>
                  <li>455 Top Horsepower<sub>2</sub></li>
                  <li>3 Up to 3 Rows of Seating<sup>3</sup></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
