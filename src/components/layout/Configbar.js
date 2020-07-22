import React, { Component, Fragment } from 'react';
import { Sidenav } from 'materialize-css/dist/js/materialize.min.js';

import LinkWrapper from './LinkWrapper';


class Configbar extends Component {

    state = {
        sideNavElement: undefined
    }

    collapseSidebar() {
        this.state.sideNavElement.close();
    }

    render() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setState({ sideNavElement: Sidenav.init(document.getElementById('nav-config'), { edge: 'right' }) });
        });

        return (
            <Fragment>

                <a href="javascript();" data-target="nav-config" className="sidenav-trigger"
                    style={{ float: 'right', display: 'block' }}>
                    <i className="material-icons">settings</i>
                </a>

                <ul id="nav-config" className="sidenav indigo">
                    <li onClick={() => { this.collapseSidebar() }}>
                        <LinkWrapper to="/user-details">
                            <output style={{ color: 'white' }}>User details</output>
                        </LinkWrapper>
                    </li>
                </ul>

            </Fragment>
        )
    }
}

export default Configbar;