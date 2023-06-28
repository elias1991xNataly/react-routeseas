import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  let props;
  let shallowErrorPage;
  let renderedErrorPage;
  let mountedErrorPage;

  const shallowTestComponent = () => {
    if (!shallowErrorPage) {
      shallowErrorPage = shallow(<ErrorPage {...props} />);
    }
    return shallowErrorPage;
  };

  const renderTestComponent = () => {
    if (!renderedErrorPage) {
      renderedErrorPage = render(<ErrorPage {...props} />);
    }
    return renderedErrorPage;
  };

  const mountTestComponent = () => {
    if (!mountedErrorPage) {
      mountedErrorPage = mount(<ErrorPage {...props} />);
    }
    return mountedErrorPage;
  };  

  beforeEach(() => {
    props = {};
    shallowErrorPage = undefined;
    renderedErrorPage = undefined;
    mountedErrorPage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
