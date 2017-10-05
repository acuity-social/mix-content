
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import NavBar from './NavBar.jsx';

class Header extends React.Component {


    render() {
        return (

            <header>

                <h1 className="mix-name">
                    <Link to="/">MIX</Link>
                </h1>

                <NavBar/>

            </header>

        )


    }

}

export default withRouter(Header);