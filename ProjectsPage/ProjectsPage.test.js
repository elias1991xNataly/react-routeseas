import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProjectsPage from './ProjectsPage';

describe('ProjectsPage', () => {
  let props;
  let shallowProjectsPage;
  let renderedProjectsPage;
  let mountedProjectsPage;

  const shallowTestComponent = () => {
    if (!shallowProjectsPage) {
      shallowProjectsPage = shallow(<ProjectsPage {...props} />);
    }
    return shallowProjectsPage;
  };

  const renderTestComponent = () => {
    if (!renderedProjectsPage) {
      renderedProjectsPage = render(<ProjectsPage {...props} />);
    }
    return renderedProjectsPage;
  };

  const mountTestComponent = () => {
    if (!mountedProjectsPage) {
      mountedProjectsPage = mount(<ProjectsPage {...props} />);
    }
    return mountedProjectsPage;
  };  

  beforeEach(() => {
    props = {};
    shallowProjectsPage = undefined;
    renderedProjectsPage = undefined;
    mountedProjectsPage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
