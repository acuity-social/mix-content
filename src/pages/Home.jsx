import React from 'react';

// Ethereum Explorer home page - displays system stats

export default class Home extends React.Component {

    constructor(props) {

        super(props);


    }

    componentDidMount(){


    }

    render() {

        return (

            <div ref="homeRef" className="home-page content-page">

                <div className="home-image-container">

                    <img src="/assets/icelandHouse.png" />

                </div>

            </div>

        )

    }

}