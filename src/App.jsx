
const config = require('../config');

import React from 'react';
import NavBar from './layout/NavBar.jsx';

import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

import { BrowserRouter as Router } from 'react-router-dom';
import RoutesList from './RoutesList.jsx';

export default class App extends React.Component {

    constructor(){

        super();

        this.mixClient = null;

        try{

            // Connect to Link and IPFS network

        }catch(err){

            console.error(err.message);

        }

    }

    render() {

        return (

            <Router>

                <div className="site-content">

                    <Header></Header>

                    <div className="content-main">

                        <RoutesList mixClient={this.mixClient}/>

                    </div>

                    <Footer></Footer>

                </div>

            </Router>

            );

        }


}