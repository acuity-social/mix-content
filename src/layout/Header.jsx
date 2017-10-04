
import React from 'react';
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar.jsx';

class Header extends React.Component {


    render() {
        return (

            <header>

                <h1 className="mix-name">MIX</h1>

            </header>

        )


    }

}

export default withRouter(Header);