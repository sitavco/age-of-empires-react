
import { connectRoutes } from 'redux-first-router'
// import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history'

import { ROUTE_HOME, ROUTE_LIST, ROUTE_DETAIL, ROUTE_ABOUT } from '../types'

const routesMap = {
    [ROUTE_HOME]: '/',
    [ROUTE_LIST]: '/list',
    [ROUTE_DETAIL]: '/detail/:id',
    [ROUTE_ABOUT]: '/about'
}

const history = createBrowserHistory()

const {
    reducer,
    middleware,
    enhancer
} = connectRoutes(history, routesMap)

// @HACK Exporting when assigning the variables above works when the application compiles to run,
// however Jest chokes on the reducer when running our snapshot tests.
export {
    reducer,
    middleware,
    enhancer
}
