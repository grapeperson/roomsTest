import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware, routerReducer } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import { roomsDataReducer } from './reducers/roomsDataReducer';
import { socketMiddleware } from './utils/index';

export const history = createHistory();
const middleware = routerMiddleware(history);
const reducers = combineReducers({roomsDataReducer, router: routerReducer});
const store = createStore(reducers,applyMiddleware(thunk, logger, socketMiddleware, middleware));
export default store;
