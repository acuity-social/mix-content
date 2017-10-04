// Publish page

import React from 'react';

const IPFS = require('ipfs'),
    node = new IPFS(),
    series = require('async').series;

export default class Publish extends React.Component {

    constructor(props) {

        super(props);

        let fileMultihash = null;

        series(
            [
                (cb) => node.on('ready', cb),
                (cb) => node.version((err, version) => {
                    if (err) {
                        return cb(err)
                    }
                    console.log('Version:', version.version);
                    cb()
                }),
                (cb) => node.files.add({
                    path: 'hello.txt',
                    content: Buffer.from('Elloo der')
                }, (err, result) => {
                    if (err) { return cb(err) }

                    // Once the file is added, we get back an object containing the path, the
                    // multihash and the sie of the file
                    console.log('\nAdded file:', result[0].path, result[0].hash);
                    fileMultihash = result[0].hash;
                    // cb()
                })
            ]
        )

    }

    componentDidMount() {


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