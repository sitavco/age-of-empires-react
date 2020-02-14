
import { createAction } from 'redux-actions';

import * as types from './types';

// ROUTING
export const routeHome = createAction(types.ROUTE_HOME);
export const routeList = createAction(types.ROUTE_LIST);
export const routeDetail = createAction(types.ROUTE_DETAIL);

export const routeAbout = createAction(types.ROUTE_ABOUT)

