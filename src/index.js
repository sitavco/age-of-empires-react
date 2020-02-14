import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./state/store";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './view/Home';
import List from './view/List';
import Detail from './view/Detail';

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
                <Route path="/detail">
                    <Detail />
                </Route>
            </Switch>
        </Router>
    </Provider>
), document.getElementById('root'));

// ReactDOM.render(ageOfEmpiresRoute, document.getElementById('root'));