import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  let props;
  let shallowAboutPage;
  let renderedAboutPage;
  let mountedAboutPage;

  const shallowTestComponent = () => {
    if (!shallowAboutPage) {
      shallowAboutPage = shallow(<AboutPage {...props} />);
    }
    return shallowAboutPage;
  };

  const renderTestComponent = () => {
    if (!renderedAboutPage) {
      renderedAboutPage = render(<AboutPage {...props} />);
    }
    return renderedAboutPage;
  };

  const mountTestComponent = () => {
    if (!mountedAboutPage) {
      mountedAboutPage = mount(<AboutPage {...props} />);
    }
    return mountedAboutPage;
  };  

  beforeEach(() => {
    props = {};
    shallowAboutPage = undefined;
    renderedAboutPage = undefined;
    mountedAboutPage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
