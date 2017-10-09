// Publish page

import React from 'react';
const mixApi = require('../lib/mix-api/index');

const MixConnector = mixApi.MixConnector,
    MixinRegistryContract = mixApi.mixContracts.MixinRegistryContract;

export default class Mixin extends React.Component {

    constructor(props) {

        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            parentId : 0,
            uri : '',
            description : ''
        };

        this.addMixin = this.addMixin.bind(this);

        const mixConnector = new MixConnector();

        try{

            // Connect to a given blockchain as well as the Mixin Registry Contract
            this.web3 = mixConnector.blockchainConnect();
            this.mixinRegistryContract = new MixinRegistryContract(this.web3);
            this.mixinRegistryContract.contractConnect();

        }catch(err){

            console.error(err.message);
        }



    }

    handleInputChange(event) {

        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

        this.setState({
            [name]: value
        });

    }

    addMixin(ev){

        ev.preventDefault();

        this.mixinRegistryContract.addMixin(this.state).then(
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

            <div className="content-page">

                <h3 className="content-heading">Mixins</h3>

                <div className="content-panel">

                    <div className="col-md-6 col-md-offset-3">

                        <h4>Add new mixin</h4>

                        <form onSubmit={this.addMixin}>

                            <div className="form-group">

                                <label>Parent ID</label>

                                <input
                                    type="number"
                                    onChange={this.handleInputChange}
                                    name="parentId"
                                    className="form-control"
                                    value={this.state.parentId} />

                            </div>

                            <div className="form-group">

                                <label>Mixin URI</label>

                                <input
                                    type="text"
                                    onChange={this.handleInputChange}
                                    name="uri"
                                    className="form-control"
                                    value={this.state.uri} />

                            </div>

                            <div className="form-group">

                                <label>Description</label>

                                <textarea
                                    onChange={this.handleInputChange}
                                    name="description"
                                    className="form-control"
                                    value={this.state.description}></textarea>


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