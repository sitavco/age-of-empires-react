
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import aoeImg from '../aoe.jpg';
import { requestApiData } from '../state/actions';

class Home extends React.Component {

    componentDidMount() {
        this.props.requestApiData();
    }

    /*
    person = (x, i) => 
        eslint-disable 
        <div key={x}>
            <span>{x.id}</span>
            <span>{x.age}</span>
        </div>
    */
    
    render() {
        // const { units = [] } = this.props.data;
        return (
            <div className="container">
                <div className="d-flex flex-row mt-3">
                    <div className="col-10">
                        <h1 className="text-center">Home Page</h1>
                        <div className="d-flex justify-content-center mt-5">
                            <img src={aoeImg} className="App-logo" alt="logo" />
                        </div>
                        {/* <div>
                            { units.map(this.person) }
                        </div> */}
                    </div>
                    <div className="col-2 mt-3">
                        <div className="d-flex flex-row justify-content-around">
                            <div>
                                <Link to="/">Home</Link>
                            </div>
                            <div>
                                <Link to="/List">Units</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => 
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);