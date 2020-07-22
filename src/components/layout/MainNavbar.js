import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import LinkWrapper from './LinkWrapper';

import { Sidenav } from 'materialize-css/dist/js/materialize.min.js';
import Configbar from './Configbar';

const PagesMenu = (props) => {
  return (
    <Fragment>
      <li onClick={() => { props.collapseSidebar(props.sideNavElement) }}>
        <LinkWrapper to="/">
          <output style={{ color: 'white' }}>Home</output>
        </LinkWrapper>
      </li>
      <li onClick={() => { props.collapseSidebar(props.sideNavElement) }}>
        <LinkWrapper to="/authentication">
          <output style={{ color: 'white' }}>Login</output>
        </LinkWrapper>
      </li>
      <li onClick={() => { props.collapseSidebar(props.sideNavElement) }}>
        <LinkWrapper to="/about">
          <output style={{ color: 'white' }}>About</output>
        </LinkWrapper>
      </li>
    </Fragment>
  );
}

class MainNavbar extends Component {

  state = {
    sideNavElement: undefined
  }

  collapseSidebar(element) {
    element.close();
  }

  render() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setState({ sideNavElement: Sidenav.init(document.getElementById('nav-mobile')) });
    });

    return (
      <nav className="indigo darken-4" role="navigation">
        <div className="nav-wrapper container">

          <Configbar />

          <ul id="logo-container" className="brand-logo">
            <li>
              <NavLink to="/">
                <output style={{ color: 'white' }}>Logo</output>
              </NavLink>
            </li>
          </ul>

          <ul className="right hide-on-med-and-down">
            <PagesMenu collapseSidebar={this.collapseSidebar} sideNavElement={this.state.sideNavElement} />
          </ul>

          <ul id="nav-mobile" className="sidenav indigo darken-4">
            <PagesMenu collapseSidebar={this.collapseSidebar} sideNavElement={this.state.sideNavElement} />
          </ul>

          <a href="javascript();" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>

        </div>
      </nav>
    );
  }
}

export default MainNavbar;