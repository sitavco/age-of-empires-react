import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiData } from '../state/actions';

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    getUser = id => {
        fetch("/age-of-empires-units.json/" + id)
            .then(response => response.json())
            .then(data => this.setState({ user: data }));
        console.log("testing");
    };

    componentDidMount() {

        console.log(this.props.data)
        // const { match: { params } } = this.props;
        // this.props.requestApiData();
        // this.getUser(this.props.match.params.userId);
       // window.state = this.state;
    }

    render() {
        const { units = [] } = this.props.data;
        console.log(this.props)
        console.log(units);
        // const updatedList = this.props.data.units;
        // const item = updatedList.find(p => p.id == location.query.id);

        return (
            <div className="container">
                <div className="d-flex flex-row mt-3">
                    <div className="col-10">
                        <h1 className="text-center">Units Page</h1>
                    </div>
                    <div className="col-2 mt-3">
                        <div className="d-flex flex-row justify-content-between">
                            <div>
                                <Link to="/">Home</Link>
                            </div>
                            <div>
                                <Link to="/list">Units</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <table className="table table-bordered">

                        {/* <tbody>
                            <tr>
                                <th scope="row">ID:</th>
                                <td>{id}</td>
                            </tr>
                            <tr>
                                <th scope="row">Name:</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Description:</th>
                                <td> {description }</td>
                            </tr>
                            <tr>
                                <th scope="row">Expansion:</th>
                                <td>{expansion}</td>
                            </tr>
                            <tr>
                                <th scope="row">Age: </th>
                                <td>{age}</td>
                            </tr>
                            <tr>
                                <th scope="row">Build Time: </th>
                                <td>{build_time}</td>
                            </tr>
                            <tr>
                                <th scope="row">Reload Time: </th>
                                <td>{reload_time}</td>
                            </tr>
                            <tr>
                                <th scope="row">Attack Delay: </th>
                                <td>{attack_delay}</td>
                            </tr>
                            <tr>
                                <th scope="row">Movent Rate: </th>
                                <td>{movent_rate}</td>
                            </tr>
                            <tr>
                                <th scope="row">Hit Points: </th>
                                <td>{hit_points}</td>
                            </tr>
                            <tr>
                                <th scope="row">Range: </th>
                                <td>{range}</td>
                            </tr>
                            <tr>
                                <th scope="row">Attack: </th>
                                <td>{attack}</td>
                            </tr>
                            <tr>
                                <th scope="row">Armor: </th>
                                <td>{armor}</td>
                            </tr>
                            <tr>
                                <th scope="row">Accuracy: </th>
                                <td>{accuracy}</td>
                            </tr>
                        </tbody> */}
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
