
import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{

    constructor(props){

        super(props);

    }

    render(){

        return (

            <nav className="nav-top">

                <ul className="nav-top-item-list">
                    <li>
                        <Link to='/publish'>publish</Link>
                    </li>
                    <li>
                        <Link to='/mixins'>mixins</Link>
                    </li>
                    <li>
                        <Link to='/browse'>browse</Link>
                    </li>
                    <li>
                        <Link to='/about'>about</Link>
                    </li>
                    <li>
                        <Link to='/help'>help</Link>
                    </li>
                </ul>


            </nav>

        )

    }

}