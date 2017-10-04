// Publish page

import React from 'react';

import MixIpfs from '../lib/mix-ipfs';

export default class Publish extends React.Component {

    constructor(props) {

        super(props);


    }

    componentDidMount() {

        this.ipfs = new MixIpfs();

    }

    render() {

        return (

            <div ref="homeRef" className="home-page content-page">

                <h3 className="content-heading">Publish</h3>

                <div className="clearfix"></div>

            </div>

        )

    }

}