import React, { Component, Fragment } from 'react';
import UserForm from './form/UserForm';

class UserDetails extends Component {

    render() {

        return (
            <Fragment>
                <div className="container mb-10">
                    <UserForm></UserForm>
                </div>
            </Fragment>
        )
    }
}

export default UserDetails;