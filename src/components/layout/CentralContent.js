import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../widget/Home';
import About from '../widget/About';
import Login from '../widget/Login';

import UserDetails from '../widget/UserDetails';

import NotFound from '../widget/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => localStorage.getItem('react-app-user-token') ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    } />
);

class CentralContent extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    {/* MAINNAVBAR ROUTES */}
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/authentication' exact={true} component={Login} />
                    <Route path='/about' component={About} />

                    {/* CONFIGNAVBAR ROUTES */}
                    <PrivateRoute path='/user-details' component={UserDetails} />

                    <Route component={NotFound} />

                </Switch>
            </Fragment>
        );
    }
}

export default CentralContent;