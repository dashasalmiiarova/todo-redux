import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReduser from './root-reduser';

const middlewares = [logger];
export const store = createStore(rootReduser, applyMiddleware(...middlewares));

export default { store };