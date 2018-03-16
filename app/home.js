import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header, {PreHeader} from './header/header';
import Banner, {BannerTitle, GalleryModal} from './Banner';
import HowItWork from './components/howitwork';
import CardCar from './components/cardcar';
import Footer from './footer/footer';
import Form from "./Form";
import Modal from './components/modal';
import Accordion from './components/accordion/Accordion';

injectTapEventPlugin();

export default class Home extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render () {
    return (
      <div>

        <div className="full-width main-top-section">
          <PreHeader/>
          <Header/>
          <BannerTitle/>
          <Banner/>
          <GalleryModal/>
        </div>

        <MuiThemeProvider>
          <div className="App">
            <Form onChange={fields => this.onChange(fields)} />
            <p>
              {JSON.stringify(this.state.fields, null, 2)}
            </p>
          </div>
        </MuiThemeProvider>

        <Modal />

        <div className="frame">
          <Accordion/>
        </div>

        <HowItWork/>

        <div className="test-drive-btn text-center">
          <a href="javascript:void(0);" id="schedule-test-drive-link" className="btn">Schedule TEST DRIVE</a>
        </div>

        <CardCar/>

        <Footer/>

      </div>
    );
  }
}
