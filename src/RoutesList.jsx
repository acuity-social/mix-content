import React from 'react'
import {Route, Switch, withRouter, Link} from 'react-router-dom';

import Home from './pages/Home.jsx';

export class RoutesList extends React.Component {

    constructor(props) {

        // this.props.mixClient is supplied via App.jsx
        super(props);


    }

    render() {


        return (

            <div className="page-content">

                <Switch>

                    <Route exact path="/" render={() => <Home linkClient={this.props.mixClient}/>}/>
                    <Route render={() => <div className="alert alert-info">Sorry this page was not found</div> }/>

                </Switch>

                <div className="clearfix"></div>

            </div>

        )
    }

}

export default withRouter(RoutesList);