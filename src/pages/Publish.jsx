// Publish page

import React from 'react';

import MixIpfs from '../lib/mix-ipfs';

export default class Publish extends React.Component {

    constructor(props) {

        super(props);

        this.sendData = this.sendData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            stringData : ''
        };

        this.ipfs = new MixIpfs();

    }

    componentDidMount() {



    }

    handleInputChange(event) {

        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

        this.setState({
            [name]: value
        });

    }

    sendData(ev){

        ev.preventDefault();

        this.ipfs.addContent(this.state.stringData).then(
            (result)=>{

                console.log(result);

            },
            (error)=>{

                console.error(error.message);

            }
        )

    }

    render() {

        return (

            <div ref="homeRef" className="home-page content-page">

                <h3 className="content-heading">Publish</h3>

                <div className="content-panel">

                    <div className="col-md-6 col-md-offset-3">

                        <form onSubmit={this.sendData}>

                            <div className="form-group">

                                <label>Send string</label>

                                <textarea onChange={this.handleInputChange} name="stringData" className="form-control" value={this.state.stringData}></textarea>

                            </div>

                            <div className="form-group">

                                <button type="submit" className="btn btn-primary pull-right">Submit</button>

                            </div>

                        </form>

                    </div>

                </div>

                <div className="clearfix"></div>

            </div>

        )

    }

}