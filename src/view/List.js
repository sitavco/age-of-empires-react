import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiData } from '../state/actions';

// const ages = ['Dark', 'Fedual', 'Castle', 'Imperial'];
const temp = [];
let items = [];

class List extends React.Component {
    constructor(){
        super();
        this.state = {
            list : []
        }
    }
  
    componentDidMount() {
        this.props.requestApiData();
    }

    person = (x, updatedList, i) =>
        /* eslint-disable */
        <tr key={x, updatedList}>
            <th scope="row">{x.id}</th>
            <td>
                <Link to="/detail/:id">{x.name}</Link>
            </td>
            <td>{x.age}</td>
        </tr>

    shock(age) {
        console.log('shock');
    }

    setFilter(event) {
        const statusSelected = event;
        // const ageSelected = this.ages;
        var updatedList = this.props.data.units;

        if ( event === 'All' ) {
            console.log(this.props.data.units);
            this.units = this.temp;
            return this.units;
        }

        updatedList = updatedList.filter(item => {
            if ( item.age === event ) {
                console.log(item);
                if ( statusSelected === event ) {
                    console.log('active');

                    return 'active';
                }
                if (statusSelected > event) {
                    console.log('actived');
                    return 'actived';
                }
                if (statusSelected < event) {
                    console.log('inactive');
                    return 'inactive';
                }
                return item;
            }
        });
        this.setState({list:updatedList})
        this.items = updatedList;
        return this.items;
    }

    /*
    filterList(event) {
        var updatedList = this.props.data.units;
        updatedList = updatedList.filter(function(item){
            console.log('sito');
            // return item.toLowerCase().search(
            // event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }
    */

    render() {
        const { units = [] } = this.props.data;

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
                    <div className="ages mb-5">
                        <h4>Ages</h4>
                        <div>
                            <button onClick={() => this.setFilter("All")} type="button">All</button>
                            <button onClick={() => this.setFilter("Dark")} type="button">Dark</button>
                            <button onClick={() => this.setFilter("Fedual")} type="button">Fedual</button>
                            <button onClick={() => this.setFilter("Castle")} type="button">Castle</button>
                            <button onClick={() => this.setFilter("Imperial")} type="button"> Imperial</button>
                        </div >
                    </div >

                    <div className="table">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">age</th>
                                    <th scope="col">costs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.list.map(this.person)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

    const mapStateToProps = state => ({ data: state.data });

    const mapDispatchToProps = dispatch =>
        bindActionCreators({ requestApiData }, dispatch);

    export default connect(mapStateToProps, mapDispatchToProps)(List);