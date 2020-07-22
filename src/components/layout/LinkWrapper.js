import React from 'react';

import { NavLink } from 'react-router-dom';

const LinkWrapper = props =>{
    return (
        <NavLink exact={true} activeStyle={{fontWeight: "bold"}} {...props}/>
    );
}
export default LinkWrapper;