import { fork } from 'redux-saga/effects';

import { routes } from './routes';

export function * sagas () {
    yield fork(routes);
}