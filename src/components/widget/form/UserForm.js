import React, { Component, Fragment } from 'react';

class UserModel {
    id = undefined;
    username = '';
    password = '';
    person = undefined;
}

class UserForm extends Component {

    state = new UserModel();

    // constructor(props) {
    //     super(props);
    // }

    initialState = () => {
        this.setState(new UserModel());
    }

    render() {

        return (
            <Fragment>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12 m6 l8">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s12 m6 l4">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12 m6 l8">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field col s12 m6 l4">
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>

                    </form>
                </div>
            </Fragment>
        )
    }
}

export default UserForm;