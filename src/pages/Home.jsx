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

            <div className="home-page">

                <div className="home-image-container">

                    <img src="/assets/icelandHouse.png" />

                    <p className="home-image-blurb">
                        Decentralised, programmable content for the new web
                    </p>

                </div>

            </div>

        )

    }

}