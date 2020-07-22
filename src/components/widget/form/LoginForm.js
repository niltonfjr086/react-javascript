import React, { Component, Fragment } from 'react';
import * as jwtDecode from 'jwt-decode';

import GenericService from '../../../services/GenericService.js';

class LoginForm extends Component {

    state = { user_id: 0, exp: '', username: '', email: '', password: '' };

    // constructor(props) {
    //     super(props);
    // }

    initialState = () => {
        this.setState({ user_id: 0, exp: '', username: '', email: '', password: '' });
    }

    setToken = (token) => {
        localStorage.setItem('react-app-user-token', token);
        var userDetails = jwtDecode(token);
        this.setState(userDetails);
    }

    onSubmit = (event) => {
        GenericService.Login(JSON.stringify({ "username": this.state.username, "password": this.state.password }))
            .then(res => {
                this.setToken(res.token);
                // debugger;
            }).catch(err => { console.error(err) });
    }

    bindTrigger = event => {
        const { id, value } = event.target;

        this.setState({
            [id]: value
        });
    }


    render() {
        return (
            <Fragment>
                <div className="row" style={{ maxWidth: '400px' }}>
                    <form>

                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" onChange={this.bindTrigger}
                                value={this.state.username} />
                            <label htmlFor="login">Login</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" onChange={this.bindTrigger}
                                value={this.state.password} />
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="col s12" style={{ paddingInline: '10%' }}>
                            <button onClick={this.onSubmit}
                                className="col s6 m btn waves-effect waves-light indigo" type="button">
                                Submit {/* <i className="material-icons right">send</i> */}
                            </button>
                            <button onClick={this.initialState}
                                className="col s6 m btn waves-effect waves-light red lighten-2" type="reset">
                                Cancel {/* <i className="material-icons right">cancel</i> */}
                            </button>
                        </div>

                    </form>
                </div>
            </Fragment >
        )
    }
}

export default LoginForm;