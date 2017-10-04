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

                <h3 className="content-heading">Home page</h3>

                <div className="clearfix"></div>

            </div>

        )

    }

}