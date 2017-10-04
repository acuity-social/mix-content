
// Publish page

import React from 'react';

const IPFS = require('ipfs'),
    node = new IPFS(),
    series = require('async').series;

export default class Publish extends React.Component {

    constructor(props) {

        super(props);

        series([
            (cb) => node.on('ready', cb),
            (cb) => node.version((err, version) => {
                if (err) { return cb(err) }
                console.log('Version:', version.version)
                cb()
            })
        ])

    }

    componentDidMount(){


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