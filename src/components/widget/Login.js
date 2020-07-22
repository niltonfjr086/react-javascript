import React, { Component, Fragment } from 'react';

import LoginForm from './form/LoginForm.js';

class Login extends Component {

    state = {}

    render() {
        return (
            <Fragment>
                <LoginForm></LoginForm>
            </Fragment>
        )
    }
}

export default Login;